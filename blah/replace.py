import os

def replace_string_in_html(root_dir, search_str, replace_str):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(subdir, file)
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                if search_str in content:
                    content = content.replace(search_str, replace_str)
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(content)
                    print(f"Updated: {file_path}")
search = '<link rel="icon" type="image/svg" href="/ccn0.svg">'

replace = '<link rel="icon" type="image/png" href="/img/ccn0logo.png">'

replace_string_in_html("G:\gitshit\ccn0.github.io", search, replace)
