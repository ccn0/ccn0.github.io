import os

def add_string_before_body_end(file_list_path, string_to_add):
    abs_file_list_path = os.path.abspath(file_list_path)

    with open(abs_file_list_path, 'r') as file_list:
        html_files = [line.strip() for line in file_list.readlines()]

    for html_file in html_files:
        try:
            abs_html_file = os.path.abspath(html_file)

            with open(abs_html_file, 'r', encoding='utf-8') as file:
                html_content = file.read()

            new_html_content = html_content.replace("</body>", f"{string_to_add}</body>")

            with open(abs_html_file, 'w', encoding='utf-8') as file:
                file.write(new_html_content)

            print(f"String added to {abs_html_file}")

        except FileNotFoundError:
            print(f"File {html_file} not found.")
        except Exception as e:
            print(f"Error processing {html_file}: {e}")


def rem_string_before_body_end(file_list_path, string_to_remove):
    abs_file_list_path = os.path.abspath(file_list_path)

    with open(abs_file_list_path, 'r') as file_list:
        html_files = [line.strip() for line in file_list.readlines()]

    for html_file in html_files:
        try:
            abs_html_file = os.path.abspath(html_file)

            with open(abs_html_file, 'r', encoding='utf-8') as file:
                html_content = file.read()

            new_html_content = html_content.replace(string_to_remove, "")

            with open(abs_html_file, 'w', encoding='utf-8') as file:
                file.write(new_html_content)

            print(f"String removed from {abs_html_file}")

        except FileNotFoundError:
            print(f"File {html_file} not found.")
        except Exception as e:
            print(f"Error processing {html_file}: {e}")

# add_string_before_body_end("blah/spooked.txt", "<script src='/blah/spookify.js'></script>")

# TO UNDO EVERYTHING
rem_string_before_body_end("blah/spooked.txt", "<script src='/blah/spookify.js'></script>")