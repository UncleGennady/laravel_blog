<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('hasRole')) {
    function hasRole($role)
    {
        // /** @var \App\Models\User $user */
        // $user = auth()->user();
        // return $user && $user->hasRole($role);

        $user = Auth::user();
        return $user && $user->hasRole($role);
    }
}

if (!function_exists('hasFavorite')) {
    function hasFavorite($postId)
    {
        // /** @var \App\Models\User $user */
        // $user = auth()->user();
        // return $user && $user->hasRole($role);

        $user = Auth::user();
        return $user && $user->hasFavorite($postId);
    }
}
