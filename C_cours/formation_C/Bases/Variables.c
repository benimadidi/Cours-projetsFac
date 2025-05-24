/*

            syntaxe	                                     Occupation mémoire	                               Fourchette de valeurs

              char	                                             ?	                                                ?
          signed char	                                        1 octet	                                         -128 à 127
             short	                                          2 octets	                                     -32 768 à 32 767
              int	                                    2 octets / 4 octets	                -32 768 / -2 147 483 648 à 32 767 / 2 147 483 647
              long	                                          4 octets	                             -2 147 483 648 à 2 147 483 647
           long long	                                      8 octets                 	-9 223 372 036 854 775 808 à 9 223 372 036 854 775 807
             float	                                          4 octets	                                  -3,4.1038 à 3,4.1038
             double	                                          8 octets	                                   -1,7.10308 à 1,7.10308
           long double	                                      10 octets                                 	-1,1.104932 à 1,1.104932          
*/


/*
Conversion float to int -><-: float variable = (int) variable
const                       : rendre une variable constante 
*/

#include<stdio.h>

int main()
{
  const float prix = 156.345;
    /*
      %d : nombre entier (int) 
      %u : non signé (unsigned)
      %f : nombre flottant (float).      (!) : %.nf : afficher n nombre apres la virgule 
      %c : caractère (char)
      %s : chaîne de caractères (texte)
      %x : afficher le nombre en hexadecimal
      %% : afiche le % 
      %p : affiche l'adresse d'une variable
    */
  printf("la marchandise est à : %.2f euros\n", prix);

  return 0;
}