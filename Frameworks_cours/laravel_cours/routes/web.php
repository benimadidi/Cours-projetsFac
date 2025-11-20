<?php

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
==============================================
🚦 LES ROUTES DANS LARAVEL
==============================================

Une route permet de définir quelle action doit être exécutée
lorsqu’un utilisateur accède à une URL donnée.

👉 En résumé :
   - Tu tapes une URL ➜ Laravel cherche la route correspondante
   - Si elle existe ➜ il exécute la fonction ou affiche la vue liée

📁 Toutes les routes web sont définies ici : routes/web.php

💡 Une route peut :
   - Retourner une vue
   - Retourner une réponse JSON ou texte
   - Appeler un contrôleur
   - Rediriger vers une autre route
*/


/*
----------------------------------------------
🏠 ROUTE PAR DÉFAUT
----------------------------------------------
Cette route renvoie la vue "welcome" (déjà incluse dans Laravel).

📍 URL : http:ocalhost:8000/
*/
Route::get('/', function () {
    return view('welcome');
});


/*
==============================================
📂 GROUPE DE ROUTES AVEC PRÉFIXE
==============================================
On peut regrouper plusieurs routes qui partagent un même préfixe.
Ici, toutes les routes commenceront par `/blog`.

Exemples d’URL :
   ➜ /blog
   ➜ /blog/article-13
*/
Route::prefix('/blog')->group(function () {

    /*
    ----------------------------------------------
    📡 ROUTE D’INDEX DU BLOG
    ----------------------------------------------
    Cette route renvoie un lien généré vers une autre route.
    On utilise la fonction `route('nom', [paramètres])`
    pour générer dynamiquement une URL à partir du nom d’une route existante.
    */
    Route::get('/', function () {

    /*
    ----------------------------------------------
    ✨ Résumé
    ----------------------------------------------
    ✔ new Post() → crée un objet vide
    ✔ $post->title = ... → remplit des colonnes
    ✔ $post->save() → écrit dans la base
    ✔ Post::all([champs...]) → récupère tous les enregistrements
    ✔ Post::find() → récupère un enregistrement par son ID

    pour modifier un enregistrement :
        ✔ $post = Post::find() → récupère l’enregistrement avec l’ID 
        ✔ $post->title = ... → modifie des colonnes
        ✔ $post->save() → met à jour dans la base

    */

        // $post = new Post();
        // $post->title = "Mon premier article";
        // $post->slug = "Mon-second-article";
        // $post->content = "Mon contenu";
        // $post->save();

        return Post::where('id', '=', 1)->get();

        return [
            'link' => route('blog.show', ['slug' => 'article', 'id' => 13]),
        ];
    })->name('blog.index');


    /*
    ----------------------------------------------
    🧩 ROUTE AVEC PARAMÈTRES DYNAMIQUES
    ----------------------------------------------
    Les accolades { } permettent de capturer des valeurs dans l’URL.
    Exemple :
        ➜ http:ocalhost:8000/blog/article-13?name=Toussaint

    🔹 La méthode `where()` permet de poser des contraintes sur les paramètres.
       Par exemple : un ID numérique, un slug sans caractères spéciaux, etc.
    */
    Route::get('/{slug}-{id}', function (string $slug, string $id, Request $request) {
        $post = Post::findorFail($id);
        return $post;
    })
    ->where([
        'id' => '[0-9]+',          //L’ID doit être un nombre
        'slug' => '[a-z0-9\-]+'    //Le slug ne contient que des lettres, chiffres et tirets
    ])
    ->name('blog.show');
});


/*
----------------------------------------------
📘 L’OBJET REQUEST DANS LARAVEL
----------------------------------------------
Laravel fournit automatiquement un objet `Request` dans les fonctions de routes.

Il permet d’accéder aux informations de la requête HTTP :
   🔹 $request->path()     → renvoie le chemin de l’URL (ex : /blog)
   🔹 $request->url()      → renvoie l’URL complète
   🔹 $request->all()      → renvoie toutes les données envoyées (GET, POST, etc.)
   🔹 $request->input('clé') → renvoie la valeur d’un paramètre précis

Cet objet est injecté automatiquement par Laravel,
il n’y a donc rien à instancier manuellement !
*/




/*----------------------------------------------------------------------------------------------*/
/*L'ORM ELOQUENT*/

/*
    Pour mettre en place mysqli, il faut modifier le fichier d'environnement .env
*/
