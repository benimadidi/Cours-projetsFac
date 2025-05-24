/*
#include : permet d'inclure un fichier
#define  : permet de definir des macros 
    (ex : #define PI 3.1415)

    Constantes prédefinies du langage C :

        __FILE__(nom du fichier)
        __LINE__(ligne du ficher)
        __DATE__(date de compilation)
        __TIME__(heure de compilation)
*/
#include <stdio.h>

#define afficher printf 
#define PI 3.14
#define CARRE(x) x*x


int main(void){

    afficher("la date du jour : %s \n", __DATE__) ;
    afficher("la valeur de PI est : %.2f \n", PI) ;
    afficher("Le carre de 5 est : %d \n", CARRE(5)) ;
    return 0 ;
}