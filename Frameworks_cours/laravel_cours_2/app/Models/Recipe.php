<?php

declare(strict_types=1); 



namespace App\Models;

use Illuminate\Support\Arr;

class Recipe
{

    public function getAll() : array
    {
        return [

            ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pasta', 'Eggs', 'Cheese', 'Bacon']],

            ['title' => 'Chicken Curry', 'ingredients' => ['Chicken', 'Coconut Milk', 'Curry Powder']],

            ['title' => 'Vegetable Stir Fry', 'ingredients' => ['Broccoli', 'Carrots', 'Say Sauce', 'Garlic']]
        ];

    }

    public function retrieve(int $id) : array
    {

        $recipes = $this->getAll();

        return Arr::get($recipes, $id, ['title' => 'Recipe not found', 'ingredients' => []]);

    }

}