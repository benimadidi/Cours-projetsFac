/*
    GESTION DES EXCEPTIONS EN JAVA

    - try :
      bloc de code à surveiller

    - catch :
      intercepte une erreur spécifique

    - InputMismatchException :
      erreur levée quand le type saisi est incorrect

*/

import java.util.InputMismatchException;
import java.util.Scanner;

public class _17_exceptions {

    public static void main(String[] args) 
    {

        Scanner scanner = new Scanner(System.in);

        try 
        {

            System.out.print("Entrez un nombre : ");
            int number = scanner.nextInt();

            System.out.println(number);

        }
        catch (InputMismatchException e) 
        {

            System.out.println("Vous devez entrer un nombre entier !");

        }

        scanner.close();

    }

}
