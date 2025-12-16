<?php

declare(strict_types=1); 


namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recipe extends Model
{

    protected function casts() : array
    {
        return [

            'ingredients' => 'array'

        ];
    }

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class)->withDefault(['name' => 'Inconnu']);
    }

}