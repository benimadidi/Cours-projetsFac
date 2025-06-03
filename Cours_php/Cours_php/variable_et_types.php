
<?php 

/*
    =======================
    🔢 TYPES ET VARIABLES EN PHP
    =======================

    📌 TYPES SCALAIRES
    - Booleen (boolean, bool)       // true ou false.
    - Entier (integer, int)         // Nombres entiers.
    - Flottant (float, double)      // Nombres à virgule.
    - Chaîne de caractères (string) // Textes entre guillemets.

    📌 TYPES COMPOSÉS
    - Tableaux (array)             // Contient plusieurs valeurs.
    - Objets (object)              // Instances de classes.
    - Fonctions de retour (callable) // Fonctions pouvant être appelées.
    - Itérateurs (iterable)        // Données pouvant être parcourues (tableaux, objets).

    📌 TYPES DIVERS
    - Ressource (resource)         // Types de données comme les connexions de base de données.
    - NULL                         // Absence de valeur.

    📌 DÉCLARATION DE VARIABLE
    - $nomVariable = valeurVariable;

    📌 PRÉFIXES POUR LES NOMBRES
    - 0b                           // Nombre binaire (ex : 0b1101 = 13).
    - 0x                           // Nombre hexadécimal (ex : 0x13 = 19).
    - 0                            // Nombre octal (ex : 0644 = 420).

    📌 CASTING
    - (int)      // Caster en entier.
    - (float)    // Caster en flottant.
    - (string)   // Caster en chaîne de caractères.
    - (bool)     // Caster en booléen.

    📌 RÉFÉRENCE SUR VARIABLE
    - &$variable // Variable qui référence une autre variable.

    📌 FONCTIONS UTILITAIRES
    - var_dump()          // Affiche les informations détaillées d’une variable.
    - gettype()           // Retourne le type d’une variable.
    - unset()             // Supprime une variable.
    - floor()            // Arrondit à l'entier inférieur.
*/

$nombre = 14;
echo $nombre;

$nombre = (float) $nombre;
echo $nombre;
