import os
import re
import markdown
import google.auth
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

TARGET_FOLDER_ID = "19XMIpo53US_o4XtfG2PuCSEMVwogiBee"
ROOT_DIR = "."

# Authenticate with ADC
credentials, project = google.auth.default(scopes=["https://www.googleapis.com/auth/drive"])
service = build("drive", "v3", credentials=credentials)

folder_id_map = {"docs": TARGET_FOLDER_ID, ".": TARGET_FOLDER_ID}
file_url_map = {}
file_id_map = {}

def get_or_create_folder(local_path):
    local_path = os.path.normpath(local_path)
    if local_path in folder_id_map: return folder_id_map[local_path]
    parent = os.path.dirname(local_path)
    if not parent: parent = "."
    parent_id = get_or_create_folder(parent)
    folder_name = os.path.basename(local_path)
    
    metadata = {
        'name': folder_name,
        'mimeType': 'application/vnd.google-apps.folder',
        'parents': [parent_id]
    }
    target = service.files().create(body=metadata, supportsAllDrives=True, fields='id').execute()
    folder_id_map[local_path] = target['id']
    print(f"📁 Created folder {local_path}")
    return target['id']

files_to_process = []
for root, dirs, files in os.walk(ROOT_DIR):
    if '.git' in root or '.agent' in root or 'coe_project' in root: continue
    for file in files:
        if file.endswith('.md'):
            local_path = os.path.normpath(os.path.join(root, file))
            if local_path.startswith('docs') or local_path == 'README.md':
                files_to_process.append(local_path)

print(f"Found {len(files_to_process)} markdown files to process.")

# PASS 1: Create empty docs to get IDs/URLs
for local_path in files_to_process:
    parent_dir = os.path.dirname(local_path)
    if not parent_dir: parent_dir = "."
    parent_id = get_or_create_folder(parent_dir)
    
    doc_name = os.path.basename(local_path).replace('.md', '')
    if doc_name == "README" and parent_dir == "docs": doc_name = "_Docs Home_"
    elif doc_name == "README" and parent_dir == ".": doc_name = "_Project Home_"
    
    metadata = {
        'name': doc_name,
        'mimeType': 'application/vnd.google-apps.document',
        'parents': [parent_id]
    }
    
    # To avoid rate limits, just create sequentially. It's fast enough.
    f = service.files().create(body=metadata, supportsAllDrives=True, fields='id').execute()
    file_id_map[local_path] = f['id']
    file_url_map[local_path] = f"https://docs.google.com/document/d/{f['id']}/edit"
    print(f"📄 Created doc placeholder: {local_path}")

# PASS 2: Resolve links, convert to HTML, upload content
def resolve_link(target, current_file_path):
    if target.startswith('http') or target.startswith('mailto'): return target
    base_target = target.split('#')[0]
    if not base_target: return target
    
    if base_target.startswith('/'):
        resolved = os.path.normpath(base_target[1:])
    else:
        current_dir = os.path.dirname(current_file_path)
        resolved = os.path.normpath(os.path.join(current_dir, base_target))
        
    if resolved in file_url_map:
        return target.replace(base_target, file_url_map[resolved])
        
    stripped = resolved.rstrip('/')
    if stripped in folder_id_map:
        return target.replace(base_target, f"https://drive.google.com/drive/folders/{folder_id_map[stripped]}")
        
    return target

link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
os.makedirs("/tmp/gdoc_html", exist_ok=True)

for i, local_path in enumerate(files_to_process, 1):
    with open(local_path, 'r') as f:
        content = f.read()
        
    def link_replacer(match):
        text = match.group(1)
        link = match.group(2)
        new_link = resolve_link(link, local_path)
        return f"[{text}]({new_link})"
        
    updated_content = link_pattern.sub(link_replacer, content)
    
    # Convert to HTML (tables and fenced code blocks enabled)
    html_content = markdown.markdown(updated_content, extensions=['tables', 'fenced_code'])
    
    # Inject basic CSS/structure so Drive respects tables and styling
    full_html = f"""
    <html>
    <head>
    <style>
        table {{ border-collapse: collapse; width: 100%; }}
        th, td {{ border: 1px solid #000; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; }}
        code {{ font-family: monospace; background-color: #f9f9f9; padding: 2px 4px; }}
        pre {{ background-color: #f9f9f9; padding: 10px; }}
    </style>
    </head>
    <body>
    {html_content}
    </body>
    </html>
    """
    
    safe_name = local_path.replace('/', '_')
    tmp_html = f"/tmp/gdoc_html/{safe_name}.html"
    with open(tmp_html, 'w') as f:
        f.write(full_html)
        
    # Upload and replace content inside the existing Doc
    media = MediaFileUpload(tmp_html, mimetype='text/html', resumable=True)
    service.files().update(fileId=file_id_map[local_path], media_body=media, supportsAllDrives=True).execute()
    print(f"🚀 Uploaded content [{i}/{len(files_to_process)}]: {local_path}")

print("\n✅ All documents successfully exported and interlinked!")
