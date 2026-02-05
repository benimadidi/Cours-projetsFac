/*
    CONSTRUCTEUR ET MOT-CLÉ this

    - Un constructeur est une méthode spéciale appelée
      lors de la création d’un objet.

    - Il porte obligatoirement le même nom que la classe et 
      commence par une majuscule.

    - this fait référence à l’instance courante
      (l’objet en cours de création ou d’utilisation).
*/

public class Cat 
{

    public Cat() 
    {

        // this représente l'objet Cat actuellement créé
        System.out.println("Je suis un chat : " + this);

    }

}
