<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'title',
        'description',
        'status',
        'image',
        'type',
        'registered_user_id',
        'user_id',
        'others'
    ];



    public function getOthersAttribute($value)
    {
        return json_decode($value, true);
    }
}
