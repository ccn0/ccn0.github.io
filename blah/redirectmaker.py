def makeRedirect():
    title = input("title: ")
    print("https://ccn0.github.io")
    url = input("url: ")

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ccn0 / redirecting to {title}</title>
</head>
<body>
    redirecting
    <a href="{url}">not working?</a>
    <script>
        location.href = "{url}"
    </script>
</body>
</html>'''

    with open(f'''{title}.html''', "w") as file:
        file.write(html_content)

    print("did it preobalby")

makeRedirect()
