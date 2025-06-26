<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use Inertia\Response;


class CartController extends BaseController {


    /**
    * @return Response
    */
    public function index(Request $request): Response {
        return inertia('users/Cart', [
            'cart' => []
        ]);
    }


}

