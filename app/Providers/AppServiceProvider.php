<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            \App\Contracts\Cart::class,
            \App\Repositories\CartRepository::class,
        );

        $this->app->bind(
            \App\Contracts\CartManager::class,
            \App\Repositories\CartManagerRepository::class,
        );


        $this->app->bind(
            \App\Contracts\Address::class,
            \App\Repositories\AddressRepository::class,
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
