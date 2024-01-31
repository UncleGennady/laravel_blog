<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    protected function validateStoreComment(Request $request)
    {
        return $request->validate([
            'text' => ['required', 'string', 'min:1', 'max:200'],
            "post_id" => ['required', 'integer', 'exists:posts,id'],
        ]);
    }
    protected function validateUpdateComment(Request $request)
    {
        return $request->validate([
            'text' => ['required', 'string', 'min:1', 'max:200'],
        ]);
    }


    public function create($postId)
    {
        try {
            $post = Post::findOrFail($postId);
        } catch (ModelNotFoundException $e) {
            return redirect()->route('posts')->withErrors(['error' => 'The post was not found']);
        }

        return view('comments.create', ['postId' => $postId]);
    }

    public function store(Request $request)
    {
        $validated = $this->validateStoreComment($request);

        Comment::create([
            'text' => $validated["text"],
            'post_id' => $validated['post_id'],
            'user_id' => Auth::id(),
        ]);

        return redirect()->route('posts.show', ['post' => $validated['post_id']])->with('status', "The comment has been created");
    }

    public function edit($id)
    {
        $comment = Comment::findOrFail($id);

        return view("comments.edit", ['comment' => $comment]);
    }

    public function update(Request $request, $id)
    {

        $validated = $this->validateUpdateComment($request);
        $comment = Comment::find($id);
        $comment->update([
            'text' => $validated["text"],
        ]);
        return redirect()->route('posts.show', ['post' => $comment->post_id])->with('status', "The comment has been updated");
    }
    public function destroy($id)
    {
        try {
            $comment = Comment::findOrFail($id);
            $comment->delete();
            return redirect()->back()->with('status', "The comment has been deleted");
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return redirect()->back()->withErrors(['error' => 'The comment was not found']);
        }
    }
}
