<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\View\View;
use Nette\Utils\Paginator;

use Spatie\LaravelIgnition\Exceptions\ViewException;
use Symfony\Component\HttpFoundation\RedirectResponse;

/*
==============================================
🎮 LES CONTROLLERS DANS LARAVEL
==============================================

Un controller est une classe qui regroupe la logique 
de ton application (traitement, récupération de données,
retour des vues…).

👉 Il permet d’éviter de mettre trop de code dans les routes.
👉 Une route appelle une méthode d’un controller.

----------------------------------------------
🛠️ CRÉER UN CONTROLLER
----------------------------------------------
Commande :
    php artisan make:controller nomDuController

Laravel crée le fichier :
    app/Http/Controllers/nomDuController.php

----------------------------------------------
📌 STRUCTURE DE BASE D’UN CONTROLLER
----------------------------------------------
class nomDuController extends Controller
{
    public function index()
    {
        return "Liste des posts";
    }
}

----------------------------------------------
🧭 UTILISER UN CONTROLLER DANS UNE ROUTE
----------------------------------------------
Route::get('/posts', [PostController::class, 'index']);

→ Quand tu vas sur /posts
  ➜ Laravel exécute la méthode index()

----------------------------------------------
🎯 POURQUOI UTILISER DES CONTROLLERS ?
----------------------------------------------
✔ Code plus propre
✔ Organisation MVC (Model – View – Controller)
✔ Routes plus lisibles
✔ Easy à maintenir

----------------------------------------------
💡 ASTUCE : CONTROLLER + MODELE
----------------------------------------------
Un controller communique souvent avec un modèle :

public function index()
{
    return Post::all();   // récupère tous les posts
}

----------------------------------------------
🧱 TYPES DE CONTROLLERS
----------------------------------------------
1️⃣ Controller classique (make:controller)
2️⃣ Resource controller
       php artisan make:controller PostController --resource
       → génère 7 méthodes automatiquement (index, show, create, store, etc.)
3️⃣ API controller (pour API JSON)

----------------------------------------------
📌 EN RÉSUMÉ
----------------------------------------------
✔ Un controller = une classe qui contient des méthodes appelées par les routes.
✔ Il sert à gérer la logique (traitement, DB, vues).
✔ Il permet de suivre la structure MVC propre à Laravel.

*/


class BlogController extends Controller
{
    public function index(): View
    {
    /*
        ====================================================
        🧪 VALIDATION AVEC LA CLASSE VALIDATOR (LARAVEL)
        ====================================================

        Laravel propose un validateur manuel via la façade Validator.
        Il est utile si on veut :
            ✔ plus de contrôle
            ✔ valider en plusieurs étapes
            ✔ personnaliser les messages d’erreurs

        ----------------------------------------------------
        📌 1. IMPORTER LA CLASSE
        ----------------------------------------------------
        use Illuminate\Support\Facades\Validator;

        ----------------------------------------------------
        📌 2. CRÉER UNE VALIDATION MANUELLE
        ----------------------------------------------------
        public function store(Request $request)
        {
            $validator = Validator::make($request->all(), [
                'title'   => 'required|min:3',
                'email'   => 'required|email',
                'content' => 'nullable|min:10'
            ]);

            if ($validator->fails()) {
                return redirect()->back()
                                ->withErrors($validator)
                                ->withInput();
            }

            Post::create($validator->validated());
        }

        ----------------------------------------------------
        📌 3. AFFICHER LES ERREURS DANS BLADE
        ----------------------------------------------------
        @if($errors->any())
            @foreach($errors->all() as $error)
                <p style="color:red;">{{ $error }}</p>
            @endforeach
        @endif

        ----------------------------------------------------
        📌 4. MESSAGES PERSONNALISÉS
        ----------------------------------------------------
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3'
        ], [
            'title.required' => 'Le titre est obligatoire.',
            'title.min'      => 'Minimum 3 caractères.'
        ]);

        ----------------------------------------------------
        📌 5. PRINCIPALES RÈGLES DE VALIDATION
        ----------------------------------------------------
        📝 Les règles les plus courantes :

        - required       → le champ est obligatoire
        - min:n         → longueur minimum
        - max:n         → longueur maximum
        - email         → doit être un email valide
        - numeric       → doit être un nombre
        - integer       → doit être un entier
        - boolean       → true/false
        - date          → date valide
        - url           → URL valide
        - unique:table  → valeur unique dans une table
        - confirmed     → nécessite un champ _confirmation
        - nullable      → champ facultatif
        - in:a,b,c      → doit être une valeur parmi la liste
        - before:date   → doit être avant une date donnée
        - after:date    → doit être après une date donnée

        Exemple rapide :
        [
            'name' => 'required|min:2|max:50',
            'email' => 'required|email|unique:users',
            'age' => 'nullable|integer|min:10',
        ] OU dans un tableau associatif : [
                'name' => ['required', 'min:2', 'max:50'
            ...]

        ----------------------------------------------------
        📌 6. RÉSUMÉ
        ----------------------------------------------------
        ✔ make() → crée une instance du validateur, a 3 paramètres (données, règles, messages optionnels)
        ✔ Validator::make() → validation avancée 
        ✔ errors() → récupérer les erreurs 
        ✔ fails() → vérifier s'il y a des erreurs  
        ✔ validated() → renvoie les données validées  
        ✔ Très utile dans les formulaires complexes, API ou logique avancée

    */


        $validator = FacadesValidator::make([
            'title' => 'azazazazaz'
        ], [
            'title' => 'required|min:6'
        ]);

        dd($validator->validated());

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

            $posts = Post::paginate(1);

            return view('blog.index', [
                'posts' => $posts 
            ]);
    }

    public function show(string $slug, string $id): RedirectResponse | Post
    {
        $post = Post::findorFail($id);
        if ($post->slug !== $slug) 
        {
            return to_route('blog.show', ['slug' => $post->slug, 'id' => $id]);
        }
        return $post;
    }
}
