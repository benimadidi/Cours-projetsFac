
<?php

/*
    ===========================
    🛠️ DÉCLARATION DE FONCTIONS
    ===========================
    - function nomFonction(type $paramètres) : typeRetour {
        instructions;
    }

    🔁 RETOUR & PARAMÈTRES
    - Une fonction peut retourner un résultat (avec return).
    - Les paramètres peuvent avoir une valeur par défaut.
    - On peut utiliser "...$args" pour accepter un nombre infini d’arguments.

    📌 TYPES DE PARAMÈTRES POSSIBLES
    - array
    - string
    - int / integer
    - float
    - bool / boolean
*/

//Cacher une fonction
function maFonction(){
    echo "Bonjour tout le monde !";
}

$coucou = "maFonction";
$coucou();

//Fonction anonyme
$hello = function(){
    echo "Bonjour tout le monde !";
};


$hello();
