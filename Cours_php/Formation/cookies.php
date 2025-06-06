
<?php
/*
    ========================
    🍪 COOKIES EN PHP
    ========================
    - Les cookies stockent des infos sur le navigateur de l’utilisateur.
    - Ne pas y stocker d’infos sensibles (facilement accessibles côté client).

    ========================
    🛠️ FONCTION PRINCIPALE
    ========================
    - setcookie()                       // Crée un cookie (à appeler avant tout HTML).
        - nom_cookie                    // Nom du cookie.
        - valeur_cookie                 // Valeur à stocker.
        - expiration (timestamp)        // Ex: time() + 3600 pour 1h.
        - chemin (path)                 // Où le cookie est disponible sur le serveur.
        - domaine                       // Domaine sur lequel il est accessible.
        - secure                        // false = accessible via HTTP et HTTPS.
        - httpOnly                      // true = inaccessible via JavaScript.

    ========================
    📥 ACCÈS AUX COOKIES
    ========================
    - $_COOKIE['nom_cookie']            // Lire la valeur d’un cookie.

*/
if (!isset($_COOKIE['lang']) || empty($_COOKIE['lang']))
    setcookie('lang', 'fr', time() + 3600 * 24 * 365, "", "", false, true);

?>
<!DOCTYPE html>
<html lang="fr">
    <head> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?= $title ?></title>
    </head>
    <body>
        <h1>Les cookies en PHP</h1>

        <p>Langue de l'utilisateur : <?= htmlspecialchars($_COOKIE['lang']);?></p>
    </body>
</html>