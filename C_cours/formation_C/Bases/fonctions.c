/*  
Declaration de fonctions : <type> <variable>(params) {bloc de code}
    <type>       : le type de donnees que la fonction renvoie 
    <variable>   : le nom de la fonction
    params       : les donnees transmises à la fonction(facultatif)
    bloc de code : le bloc de code contenant les instructions

    .
return 0 : tout s'est bien passé
return -1 : lorqu'il y a une erreur et quitte le programme
*/

#include <stdio.h>

void bonjour(void) ;
int addition(int a, int b) ;

int main(void) {

    int add = addition(15,16) ;
    printf("%d \n", add) ;

    return 0 ;
}

/*-------------------------------------------*/
int addition(int a, int b){
    return a + b ;
}

void bonjour(void) {
    printf("bonjour :) \n") ;
    // ne retourne rien
}