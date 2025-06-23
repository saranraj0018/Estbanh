<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class NotificationController extends Controller
{


    public function index (Request $request) {
        return Inertia::render('admin/_partials/Notifications');
    }


    public function registerNotification(Request $request) {
        return redirect()->route('notifications');
    }

    public function requestNotification(Request $request) {
        return redirect()->route('notifications');
    }


    public function viewNotification(\App\Models\Notification $notification) {

        if ($notification->status == 0) {
            $notification->update(['status' => 1]);
        }

        return Inertia::render('admin/_partials/ViewNotification', [
            'notification' => $notification
        ]);
    }


    public function productAddedNotification(Request $request, \App\Models\Notification $notification)
    {
        $user = \App\Models\User::find($notification->registered_user_id);

        \App\Models\Notification::create([
            "title" => "Product Request Added",
            'user_id' => $user->id,
            "description" => "Your product request has been added successfully. You can now view it in the products section.",
            "type" => 1,
        ]);
    }



    public function viewRegisterNotification(Request $request, \App\Models\Notification $notification)
    {

        $user = \App\Models\User::with('documents', 'city', 'state', 'country')->find($request->user_id);

        if ($notification->status == 0) {
            $notification->update(['status' => 1]);
        }

        return Inertia::render('admin/_partials/ViewRegisteredNotification', [
            'notification' => $notification,
            'user' => $user
        ]);
    }




    public function viewRequestNotification (Request $request, \App\Models\Notification $notification) {

        $user = \App\Models\User::with('documents', 'city', 'state', 'country')->find($request->user_id);

        if ($notification->status == 0) {
            $notification->update(['status' => 1]);
        }

        return Inertia::render('admin/_partials/ViewRequestNotification', [
            'notification' => $notification,
            'user' => $user
        ]);
    }




    public function delete(\App\Models\Notification $notification)
    {
        if ($notification) {
            $notification->delete();
        }

        return redirect()->route('notifications');
    }
}
