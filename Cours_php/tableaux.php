
<?php

/*
    =======================
    📊 TABLEAUX EN PHP
    =======================

    📝 DÉCLARATION
    - array()                         // Syntaxe historique.
    - []                              // Syntaxe moderne.

    📌 ACCÈS ET PARCOURS 
    - [cle => "valeur"]               // Attribuer une clé à un élément.
    - $tab[cle]                       // Accéder à un élément avec sa clé.
    
    📍 PARCOURIR UN TABLEAU
    - foreach($tab as $valeur) { }    // Parcourir sans les clés.
    - foreach($tab as $cle => $valeur) { } // Parcourir avec les clés.

    ⚙️ FONCTIONS UTILITAIRES
    - count($tab);                   // Compter le nombre d'éléments.
    - array_push($tab, $valeur);      // Ajouter un élément à la fin.
    - array_pop($tab);                // Supprimer le dernier élément.
    - array_shift($tab);              // Supprimer le premier élément.
    - in_array($valeur, $tab);        // Vérifier si un élément existe dans le tableau.
    - array_keys($tab);               // Obtenir les clés du tableau.
    - array_values($tab);             // Obtenir les valeurs du tableau.

    🔗 Plus de fonctions sur les tableaux :
    - https://www.php.net/manual/fr/ref.array.php
*/

$tabPopulationVille = [
    "Paris" => 14000,
    "Orleans" => 8,
    "Marseille" => 145
];

$tabPopulationVille ["Lyon"] = 4500;

var_dump($tabPopulationVille) ;

