
<?php

/*
    Se met souvent dauns un bloc try/catch pour gérer les exceptions avec le type PDOException.

    - new PDO : Crée une nouvelle instance de la classe PDO, qui représente une connexion à la base de données.
        Comme paramètres, on a :
            - $DB_DSN : Le DSN (Data Source Name) qui contient les informations nécessaires pour se connecter à la base de données.
            - $DB_USER : Le nom d'utilisateur pour se connecter à la base de données.
            - $DB_PASS : Le mot de passe pour se connecter à la base de données.

        - rowCount() : Récupère le nombre de lignes affectées par la derniere requete.
*/

require 'db-config.php'; 

try{
    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS);

    echo 'Connexion &eacute;tablie';
}
catch(PDOException $pe){
    Echo 'Erreur : '. $pe -> getMessage(); 
}