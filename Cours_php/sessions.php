<?php
    /* 
    ========================
    🔐 SESSIONS EN PHP
    ========================
    - Les sessions stockent des infos côté serveur pour un utilisateur.
    - Plus sécurisées que les cookies (pas visibles dans le navigateur).

    ========================
    ⚙️ OPTIONS UTILES (php.ini ou ini_set())
    ========================
    - session.cookie_lifetime = 0        // Cookie supprimé à la fermeture du navigateur.
    - session.use_cookies = 1            // Active l’utilisation des cookies pour les sessions.
    - session.use_only_cookies = 1       // Force l’usage uniquement des cookies (plus sûr).
    - session.use_strict_mode = 1        // Refuse les ID non créés par le serveur.
    - session.cookie_httponly = 1        // Cookie inaccessible via JavaScript.
    - session.use_trans_sid = 0          // Empêche d’envoyer l’ID de session dans l’URL.
    - session.cache_limiter = nocache    // Empêche le cache navigateur des pages avec session.
    - session.hash_function = "sha256"   // Utilise SHA-256 pour générer l’ID de session.
        - hash_algos()                   // Liste des algorithmes de hachage disponibles.

    ========================
    🧩 FONCTIONS UTILES
    ========================
    - session_id()                       // Récupérer l’ID de session actuel.
    - session_name()                     // Récupérer ou modifier le nom de la session.
    - session_regenerate_id()            // Regénérer l’ID de session (pour éviter le vol de session).
        - true = supprime l’ancienne session.
    - session_start()                    // Démarre ou reprend une session (à appeler avant tout HTML).
    - session_unset()                    // Supprimer toutes les variables de session.
    - session_destroy();                 // Détruire complètement la session.
    - session_write_close()              // Fermer la session (libère le verrou de session).
    - header()                           // Rediriger vers une autre page.
        - 'Location: /autre_page.php'    // Rediriger vers une autre page.
        - 'content-type: text/html'      // Spécifier le type de contenu.
    
    - $_SESSION['var'] = 'valeur';       // Stocker une valeur dans la session.

    - hash_algos()                       // Liste des algorithmes de hachage disponibles.
    - session_status()                   // Récupérer le statut de la session.
        - PHP_SESSION_DISABLED = 0       // Les sessions sont désactivées.
        - PHP_SESSION_NONE = 1           // Aucune session active.
        - PHP_SESSION_ACTIVE = 2         // Session active.
*/
/* 
    ========================
    🛠️ EXEMPLE DE SESSION
    ========================
    // On démarre la session (avant tout HTML).
    if (!session_id()){
    session_start();
    session_regenerate_id(true);
    }
    // On supprime les anciennes sessions.
    session_unset();
    session_destroy();
*/
if (!session_id()){
    session_start();
    session_regenerate_id(true);
}

//On fait des choses avec la session...

session_unset();
session_destroy();

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cours PHP</title>
    </head>
    <body>
       <h1>Sessions en PHP</h1> 

       <pre>
        <?php print_r(session_status());?>
       </pre>
    </body>
</html>