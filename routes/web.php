<?php

use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\LocationController;
use Inertia\Inertia;

/**
 * User login
 */
Route::middleware(['guest'])->group( function() {

    Route::get('/login', function () {
        return Inertia::render('auth/UserLogin');
    })->name('login');

   Route::post('login', [AuthenticatedSessionController::class, 'login']);


    //Register page
    Route::prefix('register')->controller(AuthenticatedSessionController::class)->group(function () {
        Route::get('/', 'create')->name('register');
        Route::post('/data', 'storeSession')->name('register.data');

        Route::get('/address', 'createAddress')->name('register.address');
        Route::post('/address/data', 'storeAddress')->name('register.address.data');

        Route::get('/documents', 'createDocument')->name('register.documents');
        Route::post('/documents/data', 'storeDocuments')->name('register.documents.data');

        Route::get('/contact', 'createContact')->name('register.contact');
        Route::post('/store', 'store')->name('register.store');
    });

    Route::get('/register/thank-you', fn () => Inertia::render('auth/ThankYou'))->name('register.thank-you');
    Route::get('/locations/countries', [LocationController::class, 'countries']);
    Route::get('/locations/states/{country}', [LocationController::class, 'states']);
    Route::get('/locations/cities/{state}', [LocationController::class, 'cities']);
});


/**
 * Admin Login
 */
Route::prefix('admin')
    /* ->middleware(['guest:admin']) */
    ->group(function() {

        Route::get('login', function () {
            return Inertia::render('auth/AdminLogin');
        })->name('admin');

        Route::post('login', [AdminAuthController::class, 'login'])
            ->name('admin.login');

        Route::post('/test/logout', [AdminAuthController::class, 'destroy'])->name('admin.logout.test');
    });


require __DIR__ . "/admin.php";
require __DIR__ . "/user.php";

