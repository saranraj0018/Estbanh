<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_id',
        'user_id',
        'address_id',
        'phone',
        'email',
        'status',
        'net_amount',
        'shipping_amount',
        'gross_amount',
        'gst_amount',
        'notes',
        'coupon_id',
        'coupon_amount',
        'shipped_at',
        'cancelled_at',
        'cancellation_reason',
        'refunded_at',
        'delivered_at',
        'created_by',
        'updated_by'
    ];



    /**
     * Relatiopnship with order details
     * @return void
     */
    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }







    /**
     * User Addresses
     * @return void
     */
    public function userAddress()
    {
        return $this->belongsTo(Address::class, 'address_id');
    }








    /**
     * Cutomers
     * @return void
     */
    public function customer()
    {
        return $this->belongsTo(User::class, 'user_id');
    }







    /**
     * Order Status
     * @param integer $status
     * @return void
     */
    public  function getStatusAttribute(int $status)
    {
        $statusExpansion = [
            1 => 'Ordered',
            2 => 'On Hold',
            3 => 'Shipped',
            4 => 'Delivered',
            5 => 'Cancelled',
            6 => 'Refunded',
        ];

        return $statusExpansion[$status];
    }
}
