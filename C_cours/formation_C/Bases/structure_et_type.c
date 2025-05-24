/*
Note : Structure de donnees permettent de regrouper plusieurs types de donnees
        sous un meme nom, ce qui est particulièrement utile pour gérer
        des données complexes.


        [DECLARATION] (!) se fait en dehors de la fonction main()
    struct nom_structure{champ de la structure}
    enum nom_enum{ champ de l'enumeration}
    

        [APPEL]
    struct nom_structure nom = {donnees}
    enum nom_enum nom = {donnees}

typedef : permet de definir un type (creer des "alias")
    permet de transformer une structure en type
    permet de transformer une enum(enumeration) en type

(*monPointeur).un_champ = X ;
monPointeur -> un_champ = X
*/

#include <stdio.h>
#include <string.h>

typedef struct player {
    signed char username[255] ;
    int hp ;
    int mp  ;
} player;

/*------------------------------------------*/
// Lespointeurs avec les structure de donnees
void create_player(player *p){
    strcpy(p ->username, "Naoki") ;
    p -> hp = 100 ;
    p -> mp = 100 ;
}
/*------------------------------------------*/
int main(void){

    player p1 = {"", 0,0} ;
    create_player(&p1) ;

    printf("Nom du joueur : %s \n",p1.username) ;
    printf("Point de vie : %d hp \n", p1.hp) ;
    printf("Mana : %d mp \n", p1.mp) ;

    return 0 ;
}


/*
#include <stdio.h>

typedef enum Booleen {
    NON, // 0 
    OUI // 1
} Booleen ;

int main(void)
{
    Booleen jeu_lance = NON ou 0 ;

    if(jeu_lance == OUI)
        printf("le jeu est lance \n") ;
    else
        printf("Le jeu n'est pas lance \n") ;

    return 0 ;
}

*/