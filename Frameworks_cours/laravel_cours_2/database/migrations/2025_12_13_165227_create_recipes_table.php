<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();

            $table->string('title');

            $table->json('ingredients');

            $table->timestamps();
        });


        $recipes = [

            ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pasta', 'Eggs', 'Cheese', 'Bacon']],

            ['title' => 'Chicken Curry', 'ingredients' => ['Chicken', 'Coconut Milk', 'Curry Powder']],

            ['title' => 'Vegetable Stir Fry', 'ingredients' => ['Broccoli', 'Carrots', 'Say Sauce', 'Garlic']]

        ];

        foreach ($recipes as $recipe) {

            DB::table('recipes')->insert([

                    'title' => $recipe['title'],

                    'ingredients' => json_encode($recipe['ingredients']),

                ]);

            };

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
};
