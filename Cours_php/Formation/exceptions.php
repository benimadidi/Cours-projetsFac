
<?php

/*
    - throw : permet de lever une exception
        new Exception("<message>") : permet de créer une exception

    - try : permet de tester un code
    - catch : permet de capturer une exception
        FORME : try {} catch (ExceptionType $e) {}
            - ExceptionType : classe de base pour toutes les exceptions (classe principale)
            - $e : variable qui contient l'exception

        Avec la variable "$e" on peut utiliser d'autres attributs
            - $e -> getMessage() : permet de recuperer le message de l'exception
            - $e -> getFile() : permet de recuperer le nom du fichier où l'erreur s'est produite
            - $e -> getLine() : permet de recuperer le numéro de la ligne où l'erreur s'est produite
            - $e -> getCode() : permet de recuperer le code de l'erreur

    - finally : permet d'éxecuter du code quel que soit le resultat

    - set_exception_handler() : permet de definir une fonction qui sera executée en cas d'exception non gérée
        FORME : set_exception_handler('nom_de_la_fonction')
            - nom_de_la_fonction : nom de la fonction à executer en cas d'exception non gérée
            - cette fonction doit prendre un parametre de type Exception
*/

function showError($ex){
    echo 'Erreur : '. $ex->getMessage();
}

set_exception_handler('showError'); 

throw new Exception("Utilisateur introuvable !"); 