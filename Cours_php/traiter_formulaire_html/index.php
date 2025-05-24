<!--
    name : Utilisé pour identifier les champs du formulaire.
    id : Utilisé pour identifier les champs du formulaire dans le code HTML.

-->


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulaire HTML</title>
    </head>
    <body>
        <h1>Sasie d'information</h1>

        <form action="result.php" method="post">
            <p>
                <label for="idUser">Utilisateur : </label>
                <input type="text" name="user" id="idUser">
            </p>

            <p>
                <label for="idChoice">Choix : </label>
                <input type="radio" name="choice" id="idChoice" value="oui">Oui
                <input type="radio" name="choice" id="idChoice" value="non">Non
            </p>

            <p>
                <input type="submit" name="validForm" value="Valider"> 
            </p>
        </form>
    </body>
</html>