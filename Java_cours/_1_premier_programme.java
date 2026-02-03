/*
    La classe _1_premier_programme représente la définition de notre programme Java.

    👉 En Java, le nom de la classe DOIT être identique au nom du fichier .java.
       Exemple : _1_premier_programme.java

    Un programme Java commence toujours par une méthode spéciale appelée main.
    C’est le point d’entrée du programme : sans elle, le programme ne peut pas s’exécuter.
*/

class _1_premier_programme 
{

    /*
        Définition de la méthode principale (main)

        1. public :
           Rend la méthode accessible depuis n’importe où.
           La JVM (machine virtuelle Java) doit pouvoir y accéder.

        2. static :
           Indique que la méthode appartient à la classe elle-même
           et non à un objet créé à partir de cette classe.

        3. void :
           Signifie que la méthode ne renvoie aucune valeur.

        4. main :
           Nom standard reconnu par Java comme point de départ du programme.

        5. String[] args :
           Tableau de chaînes de caractères permettant de recevoir
           des arguments passés depuis la ligne de commande.
    */
    public static void main(String[] args) 
    {

        /*
            System est une classe fournie par Java.
            Elle permet d’interagir avec le système (console, temps, etc.).

            out est un attribut statique de System :
            il représente la sortie standard (généralement la console).

            println affiche un message dans la console
            puis effectue automatiquement un retour à la ligne.
        */
        System.out.println("Bonjour tout le monde");

    }

}
