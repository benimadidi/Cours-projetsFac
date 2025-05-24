/*
---------------------------------------------
Errors : permet de gerer les exceptions
ReferenceError : la variable n'existe pas
SyntaxError : erreur de syntaxe
TypeError : type de variable incorrect
etc...
---------------------------------------------

throw : permet de lever une exception
    new Error() : permet de créer une exception

- try : permet de tester un code
- catch : permet de capturer une exception
    FORME : try {} catch (e) {}
        e : recupere l'exception
    
    Avec la variable "e" on peut utiliser d'autres attributs
        - e.name : permet de recuperer le nom de l'exception
        - e.message : permet de recuperer le message de l'exception
- finally : permet de executer du code quel que soit le resultat

instanceof : permet de verifier si une variable est une instance d'une classe

*/

function MyErrror(message){
    const err = new Error(message);
    err.logfile = 'logs/myerror.log';
    err.code = 310 ;

    return err ;
}

throw MyErrror("Probleme");