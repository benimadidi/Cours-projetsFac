
<?php

/*

🔹 Une classe définit une entité au sein d’une application.
   - Elle regroupe :
       → des attributs (ou propriétés) : les caractéristiques de l’entité
       → des méthodes : les actions ou comportements que cette entité peut réaliser

🔹 Pour créer une classe :
       class NomDeLaClasse {
           // attributs et méthodes ici
       }

🔹 Une instance est une version concrète d’une classe (c’est un objet).
   Exemple :
       $vehicule = new Vehicule();

🔹 Le constructeur (__construct)
   - C’est une méthode spéciale appelée automatiquement lors de la création d’un objet.
   - Il sert à initialiser les attributs de l’objet.
   Exemple :
       class Vehicule {
           public function __construct() {
               echo "Un véhicule est créé 🚗";
           }
       }

🔹 Le destructeur (__destruct)
   - C’est l’opposé du constructeur.
   - Il est appelé automatiquement à la destruction de l’objet (souvent à la fin du script).
   - Exemple :
       public function __destruct() {
           echo "Le véhicule est détruit 🗑️";
       }

*/


class Vehicle 
{
    public function __construct()
    {
        echo "Je suis construit !";
    }

}

$obj1 = new Vehicle();
echo "<br>";
$obj2 = new Vehicle();

echo "<br>";
$name = 'Vehicle';
$obj3 = new $name(); //new Vehicle();

?>
