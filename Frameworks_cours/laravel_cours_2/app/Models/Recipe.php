<?php

declare(strict_types=1); 


namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class Recipe extends Model
{

    protected function casts() : array
    {
        return [

            'ingredients' => 'array'

        ];
    }

}