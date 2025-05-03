<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Str;

class Product extends Model
{
    

    protected $appends = ['images'];


    protected $fillable = [
        'name', 'part_number', 'image', 'description', 'user_id'
    ];


    public function detail() {
        return $this->hasOne(ProductDetail::class);
    }




    public function features() {
        return $this->hasMany(ProductAttributes::class);
    }


    public function images() {
        return $this->hasOne(ProductImages::class);
    }





    public function getImageAttribute($image) {
        return Str::startsWith($image, 'http') ? $image : url('/storage/' . $image);
    }



    public function getImagesAttribute() {
        return $this->images()->pluck('image')->toArray();
    }
}
