// L'implementation du code

#include <stdio.h>
#include "player.h"

/*
rendre une fonction static veut dire qu'on n'autorise que le fichier 
lequel il est utilisé [player.c] a acceder a la fonction "augmente_niveau"
*/
void salut(void){
    printf("Bonjour tout le monde \n") ;
}

int augmente_niveau(void){
    static int niveau ;
    /*
        Avec le [int], la variable niveau est a cahque fois
        détruite à la fin 

        le mots cle [static] veut tout simplement dire que la variable
        ne doit pas etre detruite a la fin
    */

    niveau += 2 ;

    return niveau ;
}