/*
    sizeof(<donnee>)           : retourne la taille en octet d'une donnée

    malloc(<taille_en_octets>) : allouer dynamiquement une zone mémoire
    free(<donnee_alloue>)      : libere la memoire alloué dynamiquemment

    calloc(<donnee>, <taille_en_octets>) : alloue et initialise tout a 0
    reallc(<donnee>, <nouvelle_taile>)   : realloue un espace memoire
 
*/

#include<stdio.h>
#include<stdlib.h>

int main(void){

    int nbr_joueurs = 2 ;
    int *liste_joueurs = NULL; 

;

    liste_joueurs = malloc(nbr_joueurs * sizeof(int)) ;
    if (liste_joueurs == NULL)
        exit(-1) ; 

    for (int i= 0 ; i < nbr_joueurs ; i++){
        printf("Joueur %d -> Numero %d \n", i+1, i*3) ;
        liste_joueurs[i] = i*3 ;
    }
    for (int i= 0 ; i < nbr_joueurs ; i++){
        printf("[%d] ", liste_joueurs[i]) ;
    }

    printf("Adresse de la memoire : %p", liste_joueurs) ;

    printf("\n------------------------------------------\n") ;

    nbr_joueurs = 5 ;
    
    liste_joueurs = realloc(liste_joueurs, nbr_joueurs * sizeof(int)) ;
    if (liste_joueurs == NULL)
        exit(-1) ; 

    for (int i= 0 ; i < nbr_joueurs ; i++){
        printf("Joueur %d -> Numero %d \n", i+1, i*3) ;
        liste_joueurs[i] = i*3 ;
    }
    for (int i= 0 ; i < nbr_joueurs ; i++){
        printf("[%d]", liste_joueurs[i]) ;
    }

    printf("Adresse de la memoire : %p", liste_joueurs) ;

    free(liste_joueurs) ;

    return 0 ;
}