<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductAttributes extends Model
{



   
    protected $fillable = [
        'name', 'variants', 'product_id'
    ];




    public function getVariantsAttribute($variants) {
        return json_decode($variants, true);
    }

}
