
<?php

/*
    ===========================
    📁 GESTION DES FICHIERS
    ===========================

    🔓 OUVERTURE DE FICHIER (fopen)
    - fopen("fichier", "mode") :
        - "r"   : lecture seule (le fichier doit exister).
        - "w"   : écriture seule (écrase le fichier).
        - "a"   : ajout en fin de fichier.
        - "r+"  : lecture/écriture (fichier existant).
        - "w+"  : lecture/écriture (supprime contenu).
        - "a+"  : lecture/écriture, ajout fin de fichier.
        - Ajouter "b" à la fin pour mode binaire (ex: "rb"). 

    - Utiliser exit() ou die() si l’ouverture échoue.

    🔐 FERMETURE
    - fclose($fichier);                         // Fermer un fichier ouvert.

    📖 LECTURE
    - fgetc($fichier);                          // Lire un caractère.
    - fgets($fichier);                          // Lire une ligne.
    - fread($fichier, $nbOctets);              // Lire un bloc binaire.
    - file("fichier");                          // Lit tout le fichier dans un tableau (ligne par ligne).
    - file_get_contents("fichier");            // Lit tout le fichier dans une chaîne.

    - feof($fichier);                           // Tester la fin du fichier.
    Ex : while (!feof($fichier)) { ... }

    ✍️ ÉCRITURE
    - fwrite($fichier, "texte");                // Écrire dans un fichier.
    - fputs($fichier, "texte");                 // Équivalent de fwrite().

    📍 POSITIONNEMENT DU CURSEUR
    - ftell($fichier);                          // Position actuelle du curseur.
    - fseek($fichier, $offset, $origine);      // Déplacer le curseur :
        - SEEK_SET : depuis le début.
        - SEEK_CUR : depuis la position actuelle.
        - SEEK_END : depuis la fin.
    - rewind($fichier);                         // Revenir au début du fichier.
*/

$myFile = fopen("infos.txt", "a");

if (!$myFile)
    exit("Ouverture du fichier impossible"); // die("Ouverture du fichier impossible");


fwrite($myFile, "\r\nune nouvelle information");


if (!fclose($myFile))
    exit("Fermeture du fichier echouee"); 


