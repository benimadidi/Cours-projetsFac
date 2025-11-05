
<?php 

/*
==============================================
⚙️ LES ATTRIBUTS ET MÉTHODES STATIQUES
==============================================

En PHP, une propriété (ou méthode) statique appartient à la classe elle-même
et non à une instance (objet) de cette classe.

Cela signifie que :
  → On n’a pas besoin de créer un objet pour y accéder.
  → Elles sont partagées entre toutes les instances de la classe.

----------------------------------------------
🔹 DÉCLARATION :
----------------------------------------------
- On utilise le mot-clé "static" devant l’attribut ou la méthode.
- On accède ensuite à ces éléments via le nom de la classe :
     👉 ClassName::$propriete
     👉 ClassName::methode()

*/

class Database  
{
    public static $_sgbd = 'MySQL';
    public static function connect()
    {
        echo 'Je me connecte...';
    }
}

echo Database::$_sgbd;
