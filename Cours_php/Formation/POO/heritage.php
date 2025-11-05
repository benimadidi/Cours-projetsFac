
<?php

/*
    L’héritage en PHP :

    ➤ Définition :
        L’héritage permet à une classe (dite “classe fille”) 
        de récupérer les propriétés et méthodes d’une autre classe (dite “classe parent”).

    ➤ Avantages :
        - Éviter la duplication de code.
        - Permettre la spécialisation : la classe fille peut étendre ou modifier le comportement du parent.
        - Faciliter la maintenance du code.

    ➤ Mots-clés :
        - "extends" : permet à une classe d’hériter d’une autre.
        - "parent::" : permet d’appeler le constructeur ou une méthode de la classe parent.
        - Les propriétés "protected" peuvent être utilisées dans les classes filles,
          contrairement aux propriétés "private" (accessibles uniquement dans la classe elle-même).

    ➤ Exemple ci-dessous :
        - La classe "Card" est la classe parent.
        - La classe "TrapCard" hérite de "Card" et ajoute un attribut "_effect".
        - La méthode "hello()" est redéfinie (surcharge) dans la classe fille
          pour afficher plus d’informations.
*/

class Card
{
    protected $_name;
    protected $_description;

    public function __construct($name, $description)
    {
        $this->_name = $name;
        $this->_description = $description;
    }

    public function hello()
    {
        echo 'Je suis la carte : ' . $this->_name ;
    }
}

class TrapCard extends Card
{
    private $_effect;

    public function __construct($name, $description, $effect)
    {
        parent::__construct($name, $description);
        $this->_effect = $effect;
    }

    public function hello()
    {
        echo 'Nom : ' . $this->_name . '<br>';
        echo 'Description : ' . $this->_description . '<br>';
        echo 'Effet : ' . $this->_effect . '<br>';
    }
        
}

// $mycard = new Card('Magicien sombre', 'Magicien aux grands pouvoirs...');
// $mycard->hello();

$mytrapcard = new TrapCard('Fosse', 'Une grande fosse...', 'Detruit tous les ennemis sur le terrain');
$mytrapcard->hello();

echo "<br>";

$myothertrapcard = new TrapCard('Piege a ours', 'Un piege redoutable...', 'Immobilise un ennemi pendant 2 tours');
$myothertrapcard->hello();

?>