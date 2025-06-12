<?php

namespace App\Listeners;

use App\Events\UserRegistrationApproved;
use App\Mail\UserRegistrationApprovedMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendRegistrationApprovedMail
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
    public function handle(UserRegistrationApproved $event): void
    {

        /**
         * Send Notification ot admin regarding new registration
         */
        Mail::to($event->user->email)
            ->send(new UserRegistrationApprovedMail(user: $event->user, password: $event->password));

            
        \App\Models\Notification::create([
            "title" => "Welcome to Estbanh",
            'user_id' => $event->user->id,
            "description" => "We are honered,.. as always;)!!",
            "type" => 1,
        ]);
    }
}
