
<?php

/*
==============================================
    🧩 LES CLASSES ABSTRAITES EN PHP
==============================================

Une classe abstraite est un modèle de classe 
qui ne peut pas être instancié directement.

Elle sert de base pour d’autres classes, 
et définit une structure commune que les classes enfants 
devront respecter.

----------------------------------------------
🔹 PRINCIPES :
----------------------------------------------

→ Une classe abstraite se déclare avec le mot-clé abstract.
→ Elle peut contenir :
     - des méthodes normales (avec un corps)
     - des méthodes abstraites (sans corps)
→ Les méthodes abstraites doivent obligatoirement 
   être redéfinies dans les classes filles.

----------------------------------------------
🔹 UTILITÉ :
----------------------------------------------

✅ Fournir un modèle commun pour plusieurs classes.  
✅ Forcer les classes filles à implémenter certaines méthodes.  
✅ Favoriser une meilleure organisation du code.

----------------------------------------------
💡 REMARQUE :
----------------------------------------------
Une classe abstraite peut contenir des propriétés et 
des méthodes normales en plus des méthodes abstraites.  
Mais on ne peut pas créer d’objet à partir d’elle.

*/

abstract class Mere 
{
    abstract protected function hello();
    abstract protected function parler($message);
}

class Fille extends Mere
{
    public function hello()
    {
        echo "Bonjour, je suis la fille";
    }

    public function parler($message)
    {
        echo $message . '<br>';
    }
}

$obj = new Fille();
$obj->parler('Bonjour'); 
$obj->parler('Comment ça va ?'); 
