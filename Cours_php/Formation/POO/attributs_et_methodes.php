
<?php

/*
==============================================
    🧩 ATTRIBUTS ET MÉTHODES EN PHP
==============================================

🔹 Un attribut (ou propriété) :
   → C’est une variable qui appartient à une classe.
   → Elle décrit une caractéristique de l’objet.

🔹 Une méthode :
   → C’est une fonction qui appartient à une classe.
   → Elle définit une action ou un comportement que l’objet peut exécuter.

----------------------------------------------
🧱 VISIBILITÉ DES ATTRIBUTS ET MÉTHODES
----------------------------------------------
- Tout ce qui est déclaré 'public' dans une classe est accessible depuis l’extérieur.
- En programmation orientée objet, on évite de rendre les attributs publics.
  ➜ Par convention, on les déclare 'private' pour assurer l’encapsulation.

----------------------------------------------
💡 ASTUCE DE NOMMAGE
----------------------------------------------
- Il est courant d’ajouter un underscore (_) au début des attributs privés
  pour bien les différencier des variables locales.
  Exemple :
      private string $_name;

----------------------------------------------
🔹 Le mot-clé $this
----------------------------------------------
- Représente l’objet courant (l’instance actuelle).
- Sert à accéder aux attributs et aux méthodes de cet objet à l’intérieur de la classe.

Exemple :
    $this->_name;      // accéder à un attribut
    $this->rouler();   // appeler une méthode

⚠️ Attention :
- On ne répète pas le signe $ quand on accède à un attribut via $this.
  Exemple :
      $this->_name = $name;  // ✅ correct
      $this->$_name = $name; // ❌ incorrect
*/


class Vehicle 
{
    private $_name;

    public function __construct(string $name = "Undefined")
    {
        $this->_name = $name;
    }

    public function move() 
    {
        echo $this->_name ." se deplace...";
    }

}

$obj1 = new Vehicle("Mon bolide");
$obj1->move();

?>