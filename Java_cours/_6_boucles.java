/*
    BOUCLES EN JAVA

    for :
    - utilisée quand le nombre d’itérations est connu

    while :
    - boucle tant que la condition est vraie

    do while :
    - exécute au moins une fois
    - teste la condition après l’exécution

    break :
    - stoppe la boucle

    continue :
    - passe à l’itération suivante
*/

public class _6_boucles 
{

    public static void main(String[] args) 
    {

        int i;
        int j = 1;

        for(i = 1; i < 6; i++)
        {

            System.out.println("Itération for n° : " + i);

        }

        System.out.println("=====================================================");

        while (j <= 10) 
        {

            System.out.println("Itération while n° : " + j);
            j++;

        }



    }

}
