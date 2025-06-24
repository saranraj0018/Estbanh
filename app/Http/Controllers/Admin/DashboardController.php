<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class DashboardController extends Controller
{
    
 
    public function index () {
        return Inertia::render('admin/Dashboard');
    }
}
