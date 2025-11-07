
<?php



/*
==============================================
    🔗 LES INTERFACES EN PHP
==============================================

Une interface est un contrat que les classes doivent respecter.  
Elle définit quelles méthodes une classe doit implémenter,  
mais ne contient aucune implémentation (aucun code à l’intérieur des méthodes).

Autrement dit, elle décrit ce qu’une classe doit faire, 
mais pas comment elle doit le faire.

----------------------------------------------
🔹 PRINCIPES :
----------------------------------------------

→ On déclare une interface avec le mot-clé "interface".  
→ Toutes les méthodes définies dans une interface sont :
     - publiques (public) par défaut  
     - sans corps (juste la signature de la méthode)  
→ Une classe qui implémente une interface doit obligatoirement
   redéfinir toutes les méthodes déclarées dans cette interface.  
→ Une classe peut implémenter plusieurs interfaces à la fois,  
   contrairement à l’héritage qui est unique.

----------------------------------------------
🔹 UTILITÉ :
----------------------------------------------

✅ Créer un contrat commun pour plusieurs classes différentes.  
✅ Assurer une cohérence entre les classes d’un même type.  
✅ Faciliter la maintenance et l’extension du code.  
✅ Favoriser la programmation orientée contrat (concept clé en POO).

*/

interface IArticle
{
    public function getNbComments();
    public  function create(); 
    public function save($author, $content);
    public function delete();
    
}

interface IProfile
{
    public function profile();

}

class BlogArticle implements IArticle, IProfile
{
    public function profile()
    {
        echo "Access au profil";
    }
    public function getNbComments()
    {
        return 15;
    }
    public  function create()
    {
        echo "Create()";
    }
    public function save($author, $content)
    {
        echo $content;
    }
    public function delete()
    {
        echo "Delete()";
    }
}

$test = new BlogArticle();
$test->profile();