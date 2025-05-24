/*
  == : égal à 
  != : different de 
  <  : plus petit que
  >  : plus grand que
  <= : plus petit ou egal à 
  >= : plus grand ou egal à  

  && : ET
  || : OU 
  !  : NOT

  int age = 15 ;
  (age == 15) ? printf("Tu as 15 ans ! \n") : printf("Tu n'as pas 15 ans \n") ;
*/


#include <stdio.h> 

int main(void) {
  
  int age = 0 ;
  int choix ;

  printf("Quel age as tu ? ") ;
  scanf("%d", &age) ;

  if(age >= 0 && age <= 125) {
    if(age == 18 )
      printf("Tu es majeur \n") ;
    else if(age < 18) 
      printf("Tu es mineur \n") ;
    else
      printf("Tu es salement vieux \n") ;
  }
  else
    printf("T'es pas humain \n") ;

/*----------------------------------------------------------------*/

  printf("Faites un choix (1/2) : ") ;  
  scanf("%d", &choix) ;

  switch(choix){
    case 1 :
      printf("Bonjour \n") ;
      break ;
    case 2 :
      printf("Salut \n") ;
      break ;
    default :
      printf("Choix invalide ! \n") ;
      break ;
  }

  return 0 ; 
}

