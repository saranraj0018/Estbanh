<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::orderByDesc('created_at')->get();
        return response()->json($notifications);
    }




    public function markAsRead($id)
    {
        $notification = Notification::findOrFail($id);
        $notification->update(['status' => 1]);

        return response()->json(['success' => true]);
    }




    public function markAllAsRead()
    {
        Notification::where('status', 0)->update(['status' => 1]);
        return response()->json(['success' => true]);
    }




    public function deleteAll()
    {
        Notification::truncate();
        return response()->json(['success' => true]);
    }




    public function deleteNotification($id)
    {
        $notification = Notification::find($id);

        if ($notification) {
            $notification->delete();
            return response()->json(['message' => 'Notification deleted successfully']);
        } else {
            return response()->json(['error' => 'Notification not found'], 404);
        }
    }




    public function unreadCount()
    {
        $count = Notification::where('status', 0)->count();
        return response()->json(['count' => $count]);
    }
}
