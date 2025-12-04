<?php

/*
==============================================
🗂️ MIGRATIONS LARAVEL
==============================================

1) La commande : 
   php artisan make:migration CreatePostTable

   → Crée un fichier de migration dans le dossier database/migrations.
   → Ce fichier contient une classe qui étend Migration.
   → Les migrations servent à versionner la structure de la base de données
     (création de tables, colonnes, index, clés étrangères, ...).

2) Le fichier créé contient :

   - up() : méthode appelée pour appliquer la migration (création de la table)
   - down() : méthode appelée pour annuler la migration (suppression de la table)
   - Schema::create('post', ...) : crée la table "post"
     - $table->id() → colonne id auto-incrémentée
     - $table->timestamps() → colonnes created_at et updated_at

3) Classe anonyme :
   Laravel retourne "new class extends Migration { ... }" pour éviter les collisions
   de noms entre les migrations.

4) Bonnes pratiques :
   - Vérifie le nom de la table : préfére le pluriel (posts)
   - Modifie la migration avant de l’exécuter
   - Pour ajouter/supprimer une colonne plus tard → crée une nouvelle migration

5) Colonnes utiles (exemples) :
   - $table->string('title');
   - $table->text('content');
   - $table->integer('views')->default(0);
   - $table->boolean('published')->default(false);
   - $table->foreignId('user_id')->constrained()->onDelete('cascade');
   - $table->softDeletes();
   - $table->timestamps();

6) Commandes Artisan utiles :
   - Lancer toutes les migrations : php artisan migrate
   - Annuler la dernière batch : php artisan migrate:rollback
   - Annuler plusieurs batches : php artisan migrate:rollback --step=2
   - Refaire tout depuis zéro : php artisan migrate:fresh
   - Rafraîchir (rollback + migrate) : php artisan migrate:refresh
   - Vérifier l’état : php artisan migrate:status

7) Points de vigilance :
   - Ne modifie pas une migration déjà exécutée en prod
   - down() doit inverser correctement up()
   - Pense aux index et contraintes si nécessaire

==============================================
*/

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
