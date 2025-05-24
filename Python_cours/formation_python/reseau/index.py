import cgi

print("content-type : text/html; charset : UTF-8\n")

html = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ma page web</title>
</head>
<body>
        <h1> bonjour</h1>
</body>
</html>"""
print(html)
