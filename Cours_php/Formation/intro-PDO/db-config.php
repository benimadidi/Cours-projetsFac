
<?php

/*
    - DB_DSN : Configure le DSN (Data Source Name). Donc il contient les informations nécessaires pour se connecter à la base de données.
        - Comme argument, on a : 
            - mysql : le SGBD utilisé
            - host : l'adresse du serveur de base de données
            - dbname : le nom de la base de données à laquelle on veut se connecter.
        - Syntaxe : 'mysql:host=localhost;dbname=fv_database'
    - DB_USER : Configure le nom d'utilisateur pour se connecter à la base de données.
    - DB_PASS : Configure le mot de passe pour se connecter à la base de données. 
*/

$DB_DSN = 'mysql:host=localhost;dbname=fv_database';
$DB_USER = 'root';
$DB_PASS = '';