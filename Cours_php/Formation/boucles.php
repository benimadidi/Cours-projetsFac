
<?php
/*
========================
🔁 BOUCLES EN PHP
========================

- while(condition) { instructions }       // Tant que la condition est vraie, on répète.
- for(init ; condition ; incr) { instr }  // Boucle avec initialisation, test, incrémentation.
- do { instructions } while(condition);   // Exécute d’abord, teste ensuite (au moins une fois).

========================
⏹️ CONTRÔLE DE BOUCLE
========================

- break;          // Interrompt la boucle en cours.
- continue;       // Passe à l’itération suivante (retour au début de la boucle).
*/



$compteur = 0;

do{
    echo "$compteur. Bonjour tout le monde <br>";
    $compteur++;

}while($compteur < 10);

?>