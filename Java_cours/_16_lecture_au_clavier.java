/*
    LECTURE AU CLAVIER EN JAVA

    - Scanner permet de lire les données saisies par l’utilisateur
    - on lui passe System.in pour indiquer que l’on souhaite lire à partir du clavier
    - il appartient au package java.util

    Méthodes courantes :
    - nextInt()    : lit un entier
    - nextDouble() : lit un nombre décimal
    - nextLine()   : lit une chaîne de caractères
    - nexChar()   : lit un caractère

    - Scanner doit être fermé après utilisation
*/

import java.util.Scanner;

public class _16_lecture_au_clavier 
{

    public static void main(String[] args) 
    {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Acceder a quel niveau ? ");
        int game_level = scanner.nextInt();


        System.out.println(game_level);


        scanner.close();

    }

}
