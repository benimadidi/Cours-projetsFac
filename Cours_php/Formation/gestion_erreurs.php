<?php

/*
    ===========================
    ⚠️ GESTION DES ERREURS EN PHP
    ===========================

    📢 AFFICHAGE D’ERREURS
    - error_reporting();                  // Définit le niveau d’erreurs à afficher.
        - E_ALL ou -1 : toutes les erreurs (dev).
        - 0 : aucune erreur (prod).

    - ini_set('display_errors', 1);       // Affiche les erreurs (1 = oui, 0 = non).

    🛠️ GESTIONNAIRE PERSONNALISÉ
    - set_error_handler();                // Crée une fonction pour gérer les erreurs.
        Dans la fonction de gestion d’erreurs, on peut utiliser les paramètres suivants :
            - errno, $errmsg, $errfile, $errline
                - $errno : type d’erreur (E_USER_ERROR, E_USER_WARNING, E_USER_NOTICE).
                - $errmsg : message d’erreur.
                - $errfile : fichier où l’erreur s’est produite.
                - $errline : ligne où l’erreur s’est produite.
        Types d’erreurs personnalisées :
        - E_USER_ERROR      // Erreur fatale.
        - E_USER_WARNING    // Avertissement.
        - E_USER_NOTICE     // Notification.

    🚨 CRÉATION D’ERREURS
    - trigger_error("message", type);     // Génère une erreur personnalisée.
        - type : E_USER_ERROR, E_USER_WARNING, E_USER_NOTICE.

    📝 ENREGISTREMENT DES ERREURS
    - error_log("message", type, dest);   // Envoie un message d’erreur vers :
        - type : 
            0 = fichier d’erreurs PHP,
            1 = email,
            3 = fichier de log personnalisé.
        - dest : chemin fichier ou adresse mail.
        
*/

error_reporting(-1); 
ini_set("display_errors", 1); 


$my_error_handler = function (int $errno, string $errmsg, string $errfile, int $errline) {
    switch ($errno) {
        case E_USER_ERROR:
            echo "Erreur : $errmsg"; 
            break;

        case E_USER_WARNING:
            echo "$errmsg. Sur le fichier $errfile. A la ligne $errline";
            error_log("$errmsg \r\n", 3, "error.log");
            break;

        case E_USER_NOTICE:
            echo "Notification : $errmsg";
            break;

        default:
            echo "ERREUR : $errmsg";
            break;
    }
};
set_error_handler($my_error_handler); 

$age = 16 ;

if ($age < 18)
    trigger_error("Tu n'es pas majeur !", E_USER_WARNING);


