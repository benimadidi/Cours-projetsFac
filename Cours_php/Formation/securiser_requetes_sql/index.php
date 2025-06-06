<?php

/*
    Sécuriser les requêtes SQL avec PDO :
    - quote() : Échappe les caractères spéciaux dans une chaîne.

    - prepare(<sql>) : Prépare une requête SQL avec des paramètres (? ou ':nom_parametre').
    - execute() : Exécute la requête préparée.
    - bindValue(<param>, <value>, <type>) : Lie une valeur à un paramètre (copie la valeur).
        - <type> : Spécifie le type de la valeur (PDO::PARAM_INT, PDO::PARAM_STR, etc.).
    - bindParam(<param>, <value>) : Lie une variable à un paramètre (prend la valeur au moment de l'exécution).

    - Option PDO::ATTR_EMULATE_PREPARES => false : Désactive l'émulation, utilise les vraies requêtes préparées du serveur.
*/

require 'db-config.php';

$options = [
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
];

try {

    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS, $options);

    $sql = 'SELECT * FROM fv_items WHERE item_sellprice = :sell_price_item';

    $request = $PDO -> prepare($sql);

    $request -> bindValue(':sell_price_item', 25, PDO::PARAM_INT);

    $request -> execute();

    $request ->setFetchMode(PDO::FETCH_ASSOC);
    echo '<pre>';
    print_r($request->fetch());
    echo '</pre>';

} 
catch (PDOException $pe) {
    echo 'Erreur : ' . $pe->getMessage();
}