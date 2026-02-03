/*
    OPÉRATEURS EN JAVA

    Opérateurs arithmétiques :
    - +   addition ou concaténation
    - -   soustraction
    - *   multiplication
    - /   division
    - %   reste (modulo)

    Opérateurs d’affectation :
    - =   affectation
    - +=  addition puis affectation

    - a++ post-incrémentation de 1
    - a-- post-decrémentation de 1

    - ++a pre-incrémentation de 1
    - --a pre-decrémentation de 1

    - -=  soustraction puis affectation
    - *=  multiplication puis affectation
    - /=  division puis affectation

    Opérateurs de comparaison :
    - === identique
    - ==  égal à
    - !=  différent de
    - >   supérieur à
    - <   inférieur à
    - >=  supérieur ou égal à
    - <=  inférieur ou égal à

    Opérateurs logiques :
    - &&  ET
    - ||  OU
    - !   NON
*/

public class _4_operateurs 
{

    public static void main(String[] args) 
    {

        int goldCoins = 0;
        System.out.println("Pièces d'or : " + goldCoins);

        goldCoins += 10;
        System.out.println("Pièces d'or : " + goldCoins);

        goldCoins += 100;
        System.out.println("Pièces d'or : " + goldCoins);

    }

}
