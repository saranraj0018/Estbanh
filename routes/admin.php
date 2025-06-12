<?php

use App\Events\UserRegistrationApproved;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SubCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::prefix('admin')
    ->middleware(['auth:admin'])
    ->group(function () {

        Route::get('/', function () {
            return redirect()->route('admin.dashboard');
        });

        Route::get('/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');


        Route::post('/delete-notification/{notification}', function (\App\Models\Notification $notification) {
            if ($notification) {
                $notification->delete();
            }

            return redirect()->route('notifications');
        })->name('delete-notification');


        // Registered user
        Route::get('/register-notifications/{notification}', function (Request $request, \App\Models\Notification $notification) {

            $user = \App\Models\User::with('documents', 'city', 'state', 'country')->find($request->user_id);

            if ($notification->status == 0) {
                $notification->update(['status' => 1]);
            }

            return Inertia::render('Admin/Partials/ViewRegisteredNotification', [
                'notification' => $notification,
                'user' => $user
            ]);
        })->name('view-register-notification');


        Route::get('/notifications', function (Request $request) {
            return Inertia::render('Admin/Partials/Notifications');
        })->name('notifications');

        Route::get('/register-notifications', function (Request $request) {
            return redirect()->route('notifications');
        })->name('register-notifications');


        // view notification
        Route::get('/notifications/{notification}', function (\App\Models\Notification $notification) {

            if ($notification->status == 0) {
                $notification->update(['status' => 1]);
            }

            return Inertia::render('Admin/Partials/ViewNotification', [
                'notification' => $notification
            ]);
        })->name('view-notification');


        Route::post('/approve-user/{user}', function (Request $request, \App\Models\User $user) {

            $request->validate([
                "password" => "required|confirmed|min:8"
            ]);

            try {
                $user->update([
                    'password' => bcrypt($request->password),
                    'status' => 1
                ]);
                event(new UserRegistrationApproved(user: $user, password: $request->password));
            } catch (\Throwable $th) {
                return redirect()->back()
                    ->withErrors(['password' => $th->getMessage()]);
            }

        })->name('approve-user');


        Route::get('/categories', [CategoryController::class, 'index'])->name('admin.categories');
        Route::post('/save-category', [CategoryController::class, 'save'])->name('create-category');
        Route::post('/delete-category', [CategoryController::class, 'destroy'])->name('delete-category');


        Route::get('/sub-categories', [SubCategoryController::class, 'index'])->name('admin.sub-categories');
        Route::post('/save-sub-categories', [SubCategoryController::class, 'save'])->name('create-sub-category');
        Route::post('/delete-sub-categories', [SubCategoryController::class, 'destroy'])->name('delete-sub-category');

        Route::get('/products', [ProductController::class, 'index'])->name('admin.products');
        Route::post('/save-product', [ProductController::class, 'save'])->name('create-product');
        Route::post('/delete-product', [ProductController::class, 'destroy'])->name('delete-product');

        Route::get('/orders', function () {
            return Inertia::render('Admin/Order');
        });
    });

