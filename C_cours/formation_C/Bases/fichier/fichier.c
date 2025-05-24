/*
    fopen(<fichier>, <mode_ouverture>) : r  (lecture_seule, doit exister)
                                         w  (ecriture seule)
                                         a  (ajout fin de fichier) 
                                         r+ (lecture/ecriture, doit exister)
                                         w+ (lecture/ecriture, supprime contenu)
                                         a+ (ajout lecture/ecriture , fin de fichier)
 
    fclose(<fichier>)                  : fermer un fichier ouvert  
    feof(<fichier>)                    : tester la fin d'un fichier                  

    [DECLARATION] 
    FILE *fic 

    [LECTURE]
    fgetc(<fichier>)                           : lire un caractere (retourne EOF) 
    fgets(<chaine>, <taille_chaine>, <fichier>) : lit une ligne (retourne NULL)
    fscanf(<fichier>,<format>, ...)             : lit du texte formaté (retourne 0)

    [ECRITURE]
    fputc(<caractere>, <fichier>)               : Ecrit un caractere
    fputs(<chaine>, <fichier>)                  : Ecrit une ligne de texte
    fprintf(<fichier>, <format>, ...)           : Ecrit du texte formaté

    [POSITIONNEMENT]
    ftell(<fichier>)                            : retourne position du curseur dans fichier
    fseek(<fichier>,<deplacement>,<origine>)    : deplace le curseur

        <origine>                               : SEEK_SET (debut fichier)
                                                  SEEK_CUR (position courante)
                                                  SEEK_END (fin fichier)
    rewind(<fichier>)                           : reinitialise la position du curseur
    
    [DIVERS]
    rename(<ancien_nom>, <nouveau_nom>)
    remove(<remove>) 
*/

#include<stdio.h> 
#include <stdlib.h>

#define MAX_LENGHT 127

int main(void){

    FILE *fichier = fopen("sauvegarde.txt", "r") ;
    if (fichier == NULL)
        exit(1) ;

    signed char texte[MAX_LENGHT] ;
    int age ;
    int annee_naissance ;

    fscanf(fichier, " %s %d %d", texte, &age, &annee_naissance) ;
    printf(" Nom = %s \nAge = %d\nAnnee de naissance = %d", texte, age, annee_naissance) ;
     
    fclose(fichier) ;
    return 0 ;
}