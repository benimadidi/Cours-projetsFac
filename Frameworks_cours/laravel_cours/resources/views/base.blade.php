
<?php

/*
    ==============================================
    🎨 BLADE : LE MOTEUR DE TEMPLATE DE LARAVEL
    ==============================================

    Blade est le système qui permet de créer des vues (.blade.php)
    de manière plus simple, propre et puissante que le HTML classique.

    📁 Localisation des vues :
        resources/views/

    ----------------------------------------------
    🧩 1. AFFICHER UNE VARIABLE
    ----------------------------------------------
    Dans un fichier Blade :
        {{ $name }}

    → Blade échappe automatiquement les données (sécurité XSS)

    Si tu veux afficher sans échapper :
        {!! $html !!}

    ----------------------------------------------
    🧱 2. LAYOUTS (Modèles de pages)
    ----------------------------------------------
    Blade permet de créer un layout de base :

    📁 resources/views/layouts/app.blade.php
    ------------------------------------------------
    <html>
    <body>
        <header>Mon header</header>

        <main>
            @yield('content')
        </main>
    </body>
    </html>
    ------------------------------------------------

    Puis une page peut l’étendre :

    @extends('layouts.app')

    @section('content')
        <h1>Page d'accueil</h1>
    @endsection

    ----------------------------------------------
    🎯 3. PASSER DES DONNÉES À UNE VUE
    ----------------------------------------------
    // Route
    Route::get('/posts', function () {
        return view('posts.index', [
            'posts' => Post::all()
        ]);
    });

    Dans Blade :
    @foreach($posts as $post)
        {{ $post->title }}
    @endforeach

    ----------------------------------------------
    📌 EN RÉSUMÉ
    ----------------------------------------------
    ✔ Blade = moteur de template intégré à Laravel  
    ✔ Permet d’écrire du HTML + logique simple  
    ✔ Supporte variables, conditions, boucles  
    ✔ Layouts, includes, composants  
    ✔ Simple, propre et très puissant

*/

?>

<!DOCTYPE html>
<html lang="fr">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>@yield('title')</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <style>
            @layer demo 
            {
                button
                {
                    all: unset;
                }
            }
        </style>

    </head>

    <body>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">

            <div class="container-fluid">

                <a href="#" class="navbar-brand">Blog</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a href="/" aria-current="page" class="nav-link active">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Link</a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

        <div class="container">
            @yield('content')
        </div>
        
    </body>

</html>