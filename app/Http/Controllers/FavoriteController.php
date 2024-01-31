<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function __invoke($postId)
    {
        $userId = auth()->id();
        $favorite = Favorite::where([
            'user_id' => $userId,
            'post_id' => $postId,
        ])->first();

        if (!$favorite) {
            Favorite::create(
                [
                    'user_id' => $userId,
                    'post_id' => $postId,
                ]
            );
            return back()->with('status', "Favorite added");
        } else {
            $favorite->delete();
            return  back()->with('status', "Favorite removed");
        }
    }
}
