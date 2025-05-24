/*
    + (addition)
    - (soustraction)
    * (multiplication)
    / (division) (!) mais entiere Ex : 5 / 2 = 2
    % (reste de la devision) Ex : 5 / 2 = 1

    <variable> = <variable> + 1 --> <variable> += 1

    A = A - B
    A -= B

    A = A * B
    A *= B 
-------------------------
    A+= --> A = A + 1
    A-= --> A = A - 1

    A++ ++A
    A-- --A
*/

#include <stdio.h>

int main(void){

    int niveau_joueur = -1 ;

    printf("Choisissez le niveau de depart : ") ;
    scanf("%d", &niveau_joueur) ;

    printf("Niveau de depart : %d \n", niveau_joueur) ;
    // Le joueur gagne un niveau 
    niveau_joueur = niveau_joueur +  1 ;
    printf("Niveau actuel : %d \n", niveau_joueur) ;

    return 0 ;

}