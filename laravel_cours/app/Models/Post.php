<?php

/*
==============================================
📝 LES MODÈLES LARAVEL 
==============================================

1) La commande :
   php artisan make:model Post

   → Crée un fichier modèle dans le dossier app/Models
   → Représente une table dans la base de données
   → Permet d'interagir facilement avec la table (CRUD) grâce à Eloquent ORM

2) Le fichier généré contient :

   namespace App\Models;
   use Illuminate\Database\Eloquent\Factories\HasFactory;
   use Illuminate\Database\Eloquent\Model;

   class Post extends Model
   {
       use HasFactory;
   }

   🔹 HasFactory : permet d'utiliser les factories pour créer des données factices
     (utile pour les tests ou le seeding)

   🔹 Model : classe de base d'Eloquent ORM qui fournit toutes les méthodes
     pour interagir avec la base de données
     Exemples : 
        - Post::all() → récupère tous les posts
        - Post::find(1) → récupère le post avec l'id = 1
        - Post::create([...]) → crée un nouveau post
        - $post->update([...]) → met à jour un post existant
        - $post->delete() → supprime un post

3) Correspondance table/modèle :
   - Par défaut, Laravel relie le modèle `Post` à la table `posts` (pluriel)
   - Si ta table a un autre nom, précise-le avec :
        protected $table = 'nom_de_table';

4) Colonnes mass assignable :
   - Pour protéger les champs à remplir via create() ou update(), on utilise :
        protected $fillable = ['title', 'content', 'user_id'];

   - Pour protéger tous les champs sauf certains :
        protected $guarded = ['id'];

5) Relations entre modèles :
   - Un modèle peut définir des relations :
        - hasOne, hasMany, belongsTo, belongsToMany
        - Exemple :
            public function comments() {
                return $this->hasMany(Comment::class);
            }

6) Bonnes pratiques :
   - Nommer le modèle au singulier
   - Vérifier que la table correspond au nom pluriel par défaut
   - Utiliser $fillable ou $guarded pour la sécurité
   - Ajouter les relations dès que nécessaire

==============================================
*/

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'content'];
    protected $guarded = ['id'];
}
