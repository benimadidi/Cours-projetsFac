<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;

Route::get('/', function () 
{
    return view('welcome');
})->name('homepage');

Route::view('/projects', 'projects')->name('projects');

Route::get('/recipes', function ()
{
    $recipes = [

        1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pasta', 'Eggs', 'Cheese', 'Bacon']],

        2 => ['title' => 'Chicken Curry', 'ingredients' => ['Chicken', 'Coconut Milk', 'Curry Powder']],

        3 => ['title' => 'Vegetable Stir Fry', 'ingredients' => ['Broccoli', 'Carrots', 'Say Sauce', 'Garlic']]

    ];



    return view('recipes.index', compact('recipes'));

})->name('recipes.index');

Route::get('/recipes/{id}', function (int $id) 
{

    $recipes = [

        1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pasta', 'Eggs', 'Cheese', 'Bacon']],

        2 => ['title' => 'Chicken Curry', 'ingredients' => ['Chicken', 'Coconut Milk', 'Curry Powder']],

        3 => ['title' => 'Vegetable Stir Fry', 'ingredients' => ['Broccoli', 'Carrots', 'Say Sauce', 'Garlic']]

    ];

    $recipe = Arr::get($recipes, $id, ['title' => 'Recipe not found', 'ingredients' => []]);

    return view('recipes.show', compact('recipe'));


})->name('recipes.show');