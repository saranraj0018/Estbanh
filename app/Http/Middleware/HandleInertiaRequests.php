<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $isAdmin = request()->is('admin/*') ? auth('admin')->user() : auth()->user();

        return [
            ...parent::share($request),
           'auth' => [
                'user' => $isAdmin,
                'permissions' =>  $isAdmin?->role?->permissions ?? [],
            ],
            'route' => $request->route(),
            'notifications' => \App\Models\Notification::where('user_id', '=', '0')->get(),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error')
            ],
        ];
    }
}
