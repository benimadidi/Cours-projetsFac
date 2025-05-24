/*
\0 : caractere de fin  de chaine 
(!) pas besoin de metrre le & avec le scanf pour les chaines de caractere

*/

#include <stdio.h>
#include<string.h> // utilise les fonctions pour les chaines

/* 
    [Fonctions des chaînes]
        strcpy(<dest>, <src>) : copie d'une chaine dans une autre
        strlen()              : taille d'une chaine (sans \0)
        strcmp()              : comparer deux chaines(léxicographiquement)  --> retourne 0 lorsque c'est vrai
            <chaine1>, <chaine2>
        strcat()              : concatener deux chaines
        strstr()              : chercher une chaine dans une autre

        sprintf()             : ecrire dans une chaine 
            <chaine>, <texte>, <taille_texte>
*/

int main(void){

    char texte[255] ;
    sprintf(texte, "Bisounours",11 ) ;
    
    printf("%s \n", texte) ;
 
    return 0 ;
}
