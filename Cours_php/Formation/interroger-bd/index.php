
<?php

/*
    Lors de la création de notre instance PDO, on peut avoir des options comme : 
        - PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' : pour définir l'encodage des caractères
        - PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION : pour lever une exception en cas d'erreur
        - PDO::ATTR_PERSISTENT => true : pour utiliser une connexion persistante (optionnel)

    - Avec l'bojet $PDO, on peut :
        - query() : Une methode pour exécuter une requête SQL
        - setFetchMode() : Une méthode pour définir le mode de récupération des données
            - FETCH_ASSOC : Récupère les données sous forme de tableau associatif
            - FETCH_NUM : Récupère les données sous forme de tableau numérique
            - FETCH_BOTH : Récupère les données sous forme de tableau associatif et numérique
            - FETCH_OBJ : Récupère les données sous forme d'objet
        - closeCursor() : Une méthode pour fermer le curseur de la requête (a utiliser surtout pour du SELECT)

        - fetch() : Une méthode pour récupérer une ligne de résultat (ne retourne qu'une ligne)
        - fetchAll() : Une méthode pour récupérer toutes les lignes de résultat (retourne un tableau de résultats)

*/
require 'db-config.php';

$options = [
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];

try{
    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS, $options);

    $sql = 'SELECT * FROM fv_abilities';
    $results = $PDO -> query($sql);
    $results -> setFetchMode(PDO::FETCH_ASSOC);

    // while($data = $results -> fetch()){
    //     echo '<p>' . $data['ability_name'] . '</p>';
    // }
    echo '<br> -------------------------------------------------------------------- <br>';

    $abilities = $results -> fetchAll();
    foreach($abilities as $ability){
        echo '<p>' . $ability['ability_name'] . '</p>';
    }

    $results -> closeCursor(); 
}
catch(PDOException $pe){

    echo 'Erreur : ' . $pe->getMessage();

}

?>