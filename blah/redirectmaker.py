def makeRedirect():
    title = input("title: ")
    url = input("url: ")
    filename = input("name of file: ")

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        location.href = "{url}"
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ccn0 / redirecting to {title}</title>
</head>
<body>
    redirecting
    <a href="{url}">not working?</a>
</body>
</html>'''

    with open(f'''{filename}.html''', "w") as file:
        file.write(html_content)

    print("did it preobalby")

makeRedirect()
