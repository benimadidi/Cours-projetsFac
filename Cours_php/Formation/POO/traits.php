<?php

/*
==============================================
    🧩 LES TRAITS EN PHP
==============================================

Un trait est un mécanisme de réutilisation de code 
dans des classes indépendantes, sans passer par l’héritage.

Il permet de grouper des fonctionnalités communes dans un bloc de code réutilisable,  
que plusieurs classes pourront utiliser en parallèle de leurs propres héritages.

----------------------------------------------
🔹 PRINCIPES :
----------------------------------------------

→ Un trait se déclare avec le mot-clé "trait".  
→ Il ressemble à une classe, mais ne peut pas être instancié directement.  
→ On l’utilise dans une classe avec le mot-clé use.  
→ Une classe peut utiliser plusieurs traits en même temps.  

Les traits sont donc une solution à la limitation de l’héritage unique en PHP.  
Ils permettent d’ajouter des méthodes dans plusieurs classes sans duplication de code.

----------------------------------------------
🔹 UTILITÉ :
----------------------------------------------

✅ Éviter la duplication de code (réutilisabilité).  
✅ Simplifier la maintenance et la cohérence du code.  
✅ Compléter une classe sans rompre sa hiérarchie d’héritage.  
✅ Combiner plusieurs comportements dans une seule classe.

*/

trait Logger
{
    public function log($message)
    {
        echo '[LOG] ' . $message . '<br>';
    }
}

trait ErrorHandler
{
    public function error($message)
    {
        echo '[ERROR] ' . strtoupper($message) . '<br>';
    }
}

class User
{
    use Logger, ErrorHandler;

    public function createUser($name)
    {
        $this->log("Création de l’utilisateur : $name");
    }
}

class Product
{
    use Logger;

    public function addProduct($name)
    {
        $this->log("Ajout du produit : $name");
    }
}


$user = new User();
$user->createUser('Toussaint');
$user->error('échec de la connexion à la base de données');

$product = new Product();
$product->addProduct('Clavier mécanique');

?>