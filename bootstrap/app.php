<?php

use App\Http\Middleware\VerifyAdminMiddleware;
use App\Http\Middleware\VerifyUserMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Routing\Router;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(function(Application $app, Router $router) {
        $router->middleware('web')->group(base_path('routes/web.php'));

        $router->middleware([VerifyAdminMiddleware::class])->prefix('admin')->group(base_path('routes/admin.php'));

        $router->middleware([VerifyUserMiddleware::class])->group(base_path('routes/user.php'));
    })
    
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
