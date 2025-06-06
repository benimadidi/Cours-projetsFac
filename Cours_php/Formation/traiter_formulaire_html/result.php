
<p><a href="index.php">&laquo; Retour au formulaire</a></p>


<pre>
<?php 

/*
    - Variables superglobales prédéfinies par PHP :
        - $_GET : Données envoyées via l'URL (méthode GET).
        - $_POST : Données envoyées via un formulaire (méthode POST).

    - Exemple d'URL GET : 
    - http://localhost/Cours_php/traiter_formulaire_html/result.php?var1=154&var2=bonjour&var3=ok
        - ? : Début des paramètres.
        - & : Séparateur clé-valeur.
        - clé=valeur : Ex. user=Jean.
        - Limite URL : ~2048 caractères.

    - Fonctions pour securiser les données :
        - htmlspecialchars($str) : Convertit les caractères spéciaux en entités HTML.
            - $str : Donnée à sécuriser.

    - Fonctions pour verifier l'integrité des données :
        - isset($var) : Vérifie si la variable existe et est non nulle.
            - $var : Variable à vérifier.
        - empty($var) : Vérifie si la variable est vide (0, "", null, false).
            - $var : Variable à vérifier.
        - is_null($var) : Vérifie si la variable est nulle 
            - $var : Variable à vérifier (doit exister).


        - isset + empty() 
            - TRUE -> chaine vide 
                      FALSE
                      [], "0", 0, 0.0
                    
        - isset() : FALSE -> NULL
                             $maVariable;

        - empty() : FALSE  -> " "
                              TRUE 
                              \0

*/

if (isset($_POST['user']) && !empty($_POST['user'])){
    $prenom = htmlspecialchars($_POST['user']);
    
    echo "Bonjour $prenom <br>";
}

if (isset($_POST['user']) && !empty($_POST['user'])){
    $choix = htmlspecialchars($_POST['choice']);

    echo "Vous avez choisi '$choix'";
}

?>
</pre>