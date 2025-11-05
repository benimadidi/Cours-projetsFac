
<?php

/*
==============================================
    🔒 ENCAPSULATION DES DONNÉES EN PHP
==============================================

L’encapsulation est un principe fondamental de la POO.
Elle consiste à protéger les données internes d’un objet
en limitant leur accès direct depuis l’extérieur de la classe.

Ainsi :
  → Les attributs sont généralement déclarés en private.
  → On utilise des méthodes publiques pour y accéder ou les modifier.

----------------------------------------------
🔹 LES ACCESSEURS (Getters / Setters)
----------------------------------------------

👉 Un getter permet de LIRE la valeur d’un attribut privé.
   - Il commence souvent par “get”
   - Exemple : getName()

👉 Un setter permet de MODIFIER la valeur d’un attribut privé.
   - Il commence souvent par “set”
   - Exemple : setName()

Ces méthodes assurent un contrôle total sur la lecture et la modification
des données internes, et permettent d’ajouter des vérifications (validation, sécurité, etc.).

*/

class Vehicle
{
    private $_name;
    public function getName(){return $this->_name;}
    public function setName(string $name){$this->_name = $name;}

    private $_speed;
    public function getSpeed(){return $this->_speed;}
    public function setSpeed(int $speed){$this->_speed = $speed;}

    public function __construct(string $name, int $speed)
    {
        $this->setName($name);
        $this->setSpeed($speed);      
    }

    public function move()
    {
        echo 'Le vehicule '. $this->_name . ' se deplace a ' . $this->_speed . ' km/h ';
    }

}

$obj1 = new Vehicle('XC450', 650);
echo  $obj1->getName();
$obj1->setName('Nouveau nom de vehicule beaucoup trop long pour etre accepte');
echo  $obj1->getName();

