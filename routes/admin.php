<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('admin.login');
});





// require __DIR__.'/auth.php';

