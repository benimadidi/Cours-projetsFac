package _9_methodes;

/*
    MÉTHODES EN JAVA

    - static :
      la méthode appartient à la classe
      pas besoin de créer un objet pour l’utiliser

    - une méthode peut :
      * ne rien retourner (void)
      * retourner une valeur (int, String, etc.)
*/

public class _9_methodes {

    public static void main(String[] args) 
    {



        System.out.println("=====================================================");



        prog(20);
        prog(15);



        System.out.println("=====================================================");



        int numberTwo = getNumberTwo();
        System.out.println("Le nombre est : " + numberTwo);



        System.out.println("=====================================================");



        Player p1 = new Player();
        Player p2 = new Player("Jason");
        Player p3 = new Player("Toussaint", 5);

      
        
        p1.attack();



        System.out.println("=====================================================");

    }

    // Méthode sans valeur de retour
    public static void prog(int age) 
    {

        System.out.println("J'ai : " + age + " ans");

    }

    // Méthode avec valeur de retour
    public static int getNumberTwo() 
    {

        return 2;

    }

}
