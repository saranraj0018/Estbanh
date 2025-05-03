<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    
    protected $fillable = [
        'product_id', 'category_id', 'sub_category_id', 
        'sale_price', 'regular_price', 'weight', 
        'height', 'length', 'width'
    ];

}
