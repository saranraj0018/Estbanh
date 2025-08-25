<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{


    /**
     * Fillables
     * @var array
     */
    protected $fillable = [
        'order_id',
        'product_id',
        'category_id',
        'variant_id',
        'product_name',
        'quantity',
        'net_amount',
        'gross_amount',
        'gst_type',
        'gst_percentage',
        'gst_amount',
        'weight'
    ];




    /**
     * Calculating waight is easier on floats
     * @var array
     */
    protected $casts = [
        'weight' => 'float',
    ];




    /**
     * Relationship with Order
     * @return void
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }





    /**
     * Product which is ordered
     * @return void
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
