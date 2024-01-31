<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BanController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->search;
        $users = User::where('first_name', 'ilike', '%' . $search . '%')
            ->orWhere('last_name', 'ilike', '%' . $search . '%')
            ->orWhere('email', 'ilike', '%' . $search . '%')->get();


        return view("ban.index", ['users' => $users]);
    }

    public function update(Request $request, $userId)
    {
        $user = User::findOrFail($userId);
        if (Auth::id() === $user->id) {
            return back()->withErrors(['error' => "You can't ban yourself"]);
        };
        if ($user->hasRole("ADMIN")) {
            return back()->withErrors(['error' => "You can't ban ADMIN"]);
        };
        $user->active = !$user->active;
        $user->save();

        return back()->with('status', "User has been " . ($user->active ? 'activated' : 'banned'));
    }
}
