/*
    STRUCTURES CONDITIONNELLES EN JAVA

    if :
    - exécute un bloc si la condition est vraie

    if / else :
    - exécute un bloc si vrai
    - sinon exécute le bloc else

    if / else if / else :
    - permet de tester plusieurs conditions

    switch :
    - alternative à if pour des valeurs précises
    - syntaxe : 
        switch (variable) 
        {
            case valeur1:
                // code
                break;
            case valeur2:
                // code
                break;
            ...
            default:
                // code
        }
*/

public class _5_conditions 
{

    public static void main(String[] args) 
    {

        int value = 23;

        if (value > 24)
            System.out.println("Valeur : " + value);

        else  if (value < 24)

            System.out.println("La valeur est inférieure à 24");

        else
            System.out.println("La valeur est bien 24");

        System.out.println("=====================================================");

        int day = 1;

        switch (day) 
        {

            case 1:
                System.out.println("Lundi");
                break;
            case 2:
                System.out.println("Mardi");
                break;
            case 3:
                System.out.println("Mercredi");
                break;        
            default:
                System.out.println("Jour inconnu");
                break;

        }

    }

}
