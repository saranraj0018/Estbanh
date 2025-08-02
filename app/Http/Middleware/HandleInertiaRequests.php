<?php

namespace App\Http\Middleware;

use App\Contracts\Cart;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{


    public function __construct(public readonly Cart $cart) {}


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

        $isAdmin = request()->is('admin/*') ? auth('admin')->user() : Auth::user();


        return [
            ...parent::share($request),
            'auth' => [
                'user' => $isAdmin,
                'permissions' =>  $isAdmin?->role?->permissions ?? [],
            ],

            'usercart' => $this->cart->getCartValue(),
            'carts' => $this->cart->getCartList(),
            'activeCart' => $this->cart->getActiveCartName(),

            'route' => $request->route(),
            'notifications' => \App\Models\Notification::where('user_id', '=', '0')->get(),
            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'error' => fn() => $request->session()->get('error')
            ],
        ];
    }
}
