<?php

use App\Http\Controllers\AuthenticatedSessionController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController as ControllersProductController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::get('/order-tracking', [OrderController::class, 'index'])->name('tracking'); // TODO: Implement order tracking
    Route::post('/request-product', [ControllersProductController::class, 'requestProduct'])->name('request-product');

    /**
     * Notification
    */
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::post('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);
    Route::get('/notifications/unread-count', [NotificationController::class, 'unreadCount']);
    Route::post('/notifications/mark-all-read', [NotificationController::class, 'markAllAsRead']);
    Route::delete('/notifications/delete-all', [NotificationController::class, 'deleteAll']);
    Route::delete('/notifications/{id}', [NotificationController::class, 'deleteNotification']);

});


Route::get('/',  [ControllersProductController::class, 'index'])->name('home');
Route::post('/search', [ControllersProductController::class, 'search'])->name('search');
Route::get('/view-product/{product}', [ControllersProductController::class, 'view'])->name('view-product');
Route::get('/products/{search}', [ControllersProductController::class, 'searchProduct'])->name('products-list');