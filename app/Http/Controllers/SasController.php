<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SasController extends Controller
{
    public function ProductDetails() {
        return Inertia::render('ProductDetails');
    }
}
