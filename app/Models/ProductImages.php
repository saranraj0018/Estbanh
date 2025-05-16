<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Str;

class ProductImages extends Model
{
    
    protected $fillable = [
        'image', 'description'
    ];




    public function getImageAttribute($image) {
        return Str::startsWith($image, 'http') ? $image : url('/storage/' . $image);
    }

}
