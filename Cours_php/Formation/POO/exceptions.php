<?php

/*
==============================================
    ⚠️ LES EXCEPTIONS EN PHP
==============================================

Les exceptions permettent de gérer les erreurs dans un programme 
de manière structurée et propre, sans interrompre brutalement l’exécution du code.

Elles représentent un mécanisme de contrôle d’erreurs orienté objet.

----------------------------------------------
🔹 DÉFINITION :
----------------------------------------------

Une exception est un objet spécial qui signale qu’une erreur s’est produite.
Au lieu d’afficher directement une erreur, le programme lance (throw) une exception,  
et une autre partie du code peut l’attraper (catch) pour la traiter proprement.

----------------------------------------------
🔹 MOTS-CLÉS IMPORTANTS :
----------------------------------------------

→ try : contient le code susceptible de provoquer une erreur.  
→ throw : sert à lancer une exception.  
→ catch : permet de récupérer et traiter l’erreur.  
→ finally : (optionnel) s’exécute toujours, qu’il y ait une erreur ou non.

----------------------------------------------
💡 AVANTAGE :
----------------------------------------------

✅ Séparation claire entre le code “normal” et la gestion des erreurs.  
✅ Meilleure lisibilité et maintenance du code.  
✅ Possibilité de créer ses propres types d’exceptions.

----------------------------------------------
🔹 RÉSUMÉ RAPIDE :
----------------------------------------------

try       → On surveille du code.
throw     → On lance une exception.
catch     → On attrape et on traite l’exception.
finally   → On exécute du code quoi qu’il arrive.

*/

try {
    $diviseur = 0;

    if ($diviseur == 0) {
        throw new Exception("Division par zéro interdite !");
    }

    echo 10 / $diviseur;
} catch (Exception $e) {
    echo '❌ Erreur : ' . $e->getMessage();
} finally {
    echo '<br>Bloc finally exécuté (nettoyage, fermeture de connexion, etc.)';
}



