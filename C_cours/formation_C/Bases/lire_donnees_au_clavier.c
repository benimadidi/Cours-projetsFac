/*   
printf()       : afficher a l'ecran 
scanf()        : saisir des donner saisies par l'utilisateur
    %(d,f,...) : ce que l'on attend (le type)
    &          : l'operateur d'adressage (dans quelle variable il va stocker ce que l'utilisateur entre)
*/

#include <stdio.h>

int main(){
   signed char lettre = 'A';
    printf("saisissez une lettre : ");
    scanf("%c", &lettre);

    printf("vous avez choisi : '%c' comme lettre \n", lettre);
    return 0 ;
}