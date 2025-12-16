<?php

use App\Models\Recipe;

use Illuminate\Support\Arr;

use Illuminate\Support\Facades\Route;




Route::get('/', function () 
{
    return view('welcome');
})->name('homepage');



Route::view('/projects', 'projects')->name('projects');



Route::get('/recipes', function () 
{

    $recipes = Recipe::all();


    return view('recipes.index', compact('recipes'));

})->name('recipes.index');



Route::get('/recipes/{id}', function (int $id) 
{

    $recipe = Recipe::find($id);


    return view('recipes.show', compact('recipe'));


})->name('recipes.show');