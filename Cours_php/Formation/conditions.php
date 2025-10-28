
<?php

/*
==============================
🔎 OPÉRATEURS DE COMPARAISON
==============================
- ==     // Égal en valeur.
- ===    // Identique (valeur ET type).
- !=     // Différent en valeur.
- !==    // Différent (valeur OU type).
- <      // Inférieur à.
- >      // Supérieur à.
- <=     // Inférieur ou égal.
- >=     // Supérieur ou égal.
- <=>    // Opérateur de comparaison combinée :
         //   0 si A == B
         //  -1 si A < B
         //   1 si A > B

==========================
🧠 MOTS CLÉS CONDITIONNELS
==========================
- if / elseif / else          // Condition classique.
- switch / case / default     // Cas multiples :
  switch(expr) {
      case val1: 
        ... 
        break;
      case val2: 
        ... 
        break;
      default: 
        ... 
        break;
  }
- Ternaire : (condition) ? expr1 : expr2;  // Forme courte de if/else.

===============================
🔍 FONCTIONS DE VÉRIFICATION
===============================
- isset($var)            // Vérifie si la variable existe et n’est pas null.
- is_int($var)           // Est-ce un entier ?
- is_bool($var)          // Est-ce un booléen ?
- is_float($var)         // Est-ce un nombre à virgule ?
- is_string($var)        // Est-ce une chaîne de caractères ?
- is_array($var)         // Est-ce un tableau ?
*/

$number = 14;

if (is_string($number)) 
    echo "C'est un entier " ;