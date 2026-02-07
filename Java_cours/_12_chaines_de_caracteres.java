/*
    CHAÎNES DE CARACTÈRES (String)

    - String est immuable :
      le contenu ne peut pas être modifié

    Méthodes courantes :
    - concat()        : concatène deux chaînes
    - length()        : longueur de la chaîne
    - toUpperCase()   : majuscules
    - toLowerCase()   : minuscules
    - charAt(index)   : caractère à l’index donné
    - equals()        : compare le contenu
*/

public class _12_chaines_de_caracteres 
{

    public static void main(String[] args) 
    {

        String s = "hello";           // équivalent à new String("hello")

        System.out.println(s);

        // Exemples simples
        System.out.println(s.concat(" world"));
        System.out.println(s.length());
        System.out.println(s.toUpperCase());
        System.out.println(s.charAt(1)); // 'e'

    }

}
