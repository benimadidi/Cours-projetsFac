package _9_methodes;

/*
    SURCHARGE DES MÉTHODES (OVERLOADING)

    - plusieurs méthodes avec le même nom
    - paramètres différents (nombre ou type)
    - ici : surcharge du constructeur Player
*/

public class Player 
{

    private String mName;
    private int mLevel;

    public Player() 
    {

        this.mName = "Player1";
        this.mLevel = 1;

        System.out.println("Player : " + this.mName + " - Level : " + this.mLevel);

    }

    public Player(String name) 
    {

        this.mName = name;
        this.mLevel = 1;

        System.out.println("Player : " + this.mName + " - Level : " + this.mLevel);

    }

    public Player(String name, int level) 
    {

        this.mName = name;
        this.mLevel = level;

        System.out.println("Player : " + this.mName + " - Level : " + this.mLevel);
        
    }

    public static void attack() 
    {

        System.out.println(" attaque !");

    }

}
