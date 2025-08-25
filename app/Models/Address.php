<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{


    protected $appends = ["address"];


    protected $fillable = [
        "name",
        "phone",
        "address_line_1",
        "address_line_2",
        "city",
        "state",
        "country",
        "landmark",
        "pincode",
        "address",
        "is_default",
        "user_id"
    ];




    public function getAddressAttribute()
    {
        return ($this->landmark ? $this->landmark . ", " : "") .
            $this->address_line_1 .
            ($this->address_line_2 ? ", " . $this->address_line_2 : "") . ", " .
            $this->city . ", " .
            $this->state . ", " .
            $this->country . " - " .
            $this->pincode;
    }
}
