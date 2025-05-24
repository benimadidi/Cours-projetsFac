/*
Avantages des pointeurs :
    Permettre aux fonctions de modifier des données
    Evite la copie

pointeur : variable contenant l'addresse d'une autre variable

    [VARIABLES]
        maVariable  : la valeur de la variable
        &maVariable : l'adresse de la variable

    [POINTEURS]
        *monPointeur = NULL ou *monPointeur = &maVariable
        (declaration et initialisation d'un pointeur)

        monPointeur  : l'adresse de la variable pointée
        *monPointeur : la valeur de la variable pointée
        &monPointeur : adresse du pointeur  
          
*/

#include <stdio.h>

void inverser_nombre(int *pt_nb1, int *pt_nb2) {
    int temporaire = 0 ;
    temporaire = *pt_nb2 ;
    *pt_nb2 = *pt_nb1 ;
    *pt_nb1 = temporaire ;
}
int main(void){

    int nombreA = 15 ;
    int nombreB = 28 ; 

    int *pointeursurnombreA = &nombreA ;
    int *poiteursurnombreB = &nombreB ;

    printf("AVANT\nA= %d\nB= %d\n", nombreA, nombreB) ;

    inverser_nombre(pointeursurnombreA, poiteursurnombreB) ;
    
    printf("APRES\nA= %d\nB= %d\n ", nombreA, nombreB) ;
    return 0 ;
}