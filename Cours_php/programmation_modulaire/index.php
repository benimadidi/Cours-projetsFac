<?php

/*
    - include : Ajoute un fichier, avertit en cas d'erreur.
    - include_once : Ajoute un fichier une seule fois.

    - require : Ajoute un fichier, erreur fatale si introuvable.
    - require_once : Ajoute un fichier une seule fois, erreur fatale si introuvable.
*/

require 'haut.php';

echo "<p>Je suis le fichier index.php !<br><br></p>";

require 'bas.php';

?>