<?php



if (!function_exists('wishlist')) {
    function wishlist()
    {
        if (!auth()->check()) {
            return [];
        }

        # getting wishlist count
        $wishlist = json_decode(auth()->user()->wishlist) ?: []; # this is an array of product ids
        return count($wishlist);
    }
}
