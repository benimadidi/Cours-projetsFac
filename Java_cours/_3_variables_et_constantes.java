/*
    VARIABLES ET CONSTANTES EN JAVA

    Variable :
    - espace mémoire qui stocke une valeur
    - la valeur peut changer

    Syntaxe :
    type nom = valeur;

    Constante :
    - valeur fixe
    - ne peut plus être modifiée après l’initialisation
    - mot-clé : final

    Syntaxe :
    final type NOM = valeur;

    Convention :
    - variable : camelCase
    - constante : MAJUSCULES_AVEC_UNDERSCORE
*/

public class _3_variables_et_constantes 
{

    public static void main(String[] args) 
    {

        final int AGE_MAXIMUM = 120;

       int ageUtilisateur = 0;

       System.out.println("Âge : " + ageUtilisateur);

       ageUtilisateur = 25;

       System.out.println("Âge : " + ageUtilisateur);

       System.out.println("Âge maximum autorisé : " + AGE_MAXIMUM);

    }

}
