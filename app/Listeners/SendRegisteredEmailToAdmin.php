<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\UserRegisteredMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendRegisteredEmailToAdmin
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        // 
    }

    /**
     * Handle the event.
     */
    public function handle(UserRegistered $event): void
    {


        $notification = \App\Models\Notification::create([
            "title" => "New User Registration Request " . $event->user->name,
            "description" => "A new user is requesting access to the platform.",
            "type" => 2,
            "registered_user_id" => $event->user->id
        ]);

        /**
         * Send Notification ot admin regarding new registration
         */
        Mail::to(env('SUPER_ADMIN_EMAIL', 'srik51977@gmail.com'))
            ->send(new UserRegisteredMail(user: $event->user, notification: $notification));

            
        
    }
}
