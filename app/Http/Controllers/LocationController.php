<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Country;
use App\Models\State;

class LocationController extends Controller
{
    public function countries() {
        return Country::all();
    }

    public function states($countryId) {
        return State::where('country_id', $countryId)->get();
    }

    public function cities($stateId) {
        return City::where('state_id', $stateId)->get();
    }
}
