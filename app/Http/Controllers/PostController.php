<?php

namespace App\Http\Controllers;

use App\Contracts\ImageSaving;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{

    protected function validateStorePost(Request $request)
    {
        return $request->validate([
            'title' => ['required', 'string', 'min:1', 'max:75'],
            'content' => ['required', 'string', 'min:1', 'max:500'],
            'images' => ['required', 'array'],
            'images.*' => ['file', 'max:25600', 'image',],
        ]);
    }

    protected function validateUpdatePost(Request $request)
    {
        return $request->validate([
            'title' => ['required', 'string', 'min:1', 'max:75'],
            'content' => ['required', 'string', 'min:1', 'max:500'],
            'images' => ['nullable', 'array'],
            'images.*' => ['file', 'max:25600', 'image',],
        ]);
    }

    public function index()
    {
        $posts = Post::orderBy('created_at', 'desc')->paginate(9);


        return view("posts.index", ['posts' => $posts]);
    }

    public function show($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return redirect()->route('posts');
        }
        if (!session()->has('post_viewed_' . $post->id)) {
            $post->increment('view_count');
            session(['post_viewed_' . $post->id => true]);
        }
        return view("posts.show", ['post' => $post]);
    }

    public function create()
    {
        return view("posts.create");
    }

    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return view("posts.edit", ['post' => $post]);
    }

    public function store(Request $request, ImageSaving $service)
    {
        $validated = $this->validateStorePost($request);
        $images = $validated['images'];
        $imagesPath = $service->save($images, 'post');

        $post = Post::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'images' => $imagesPath,
        ]);
        return redirect()->route('posts.show', $post->id)->with('status', "The post has been created");
    }

    public function update(Request $request, $id, ImageSaving $service)
    {
        $validated = $this->validateUpdatePost($request);
        $post = Post::find($id);
        if ($request->hasFile("images")) {
            Storage::delete($post->images);
            $images = $validated['images'];
            $imagesPath = $service->save($images, 'post');

            $post->update([
                'title' => $validated['title'],
                'content' => $validated['content'],
                'images' => $imagesPath,
            ]);
        } else {
            $post->update([
                'title' => $validated['title'],
                'content' => $validated['content'],
            ]);
        }

        return redirect()->route('posts.show', $post->id);
    }

    public function destroy($id)
    {
        try {
            $post = Post::findOrFail($id);
            Storage::delete($post->images);
            $post->delete();
            return redirect()->route('posts')->with('status', "The post has been deleted");
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return redirect()->route('posts')->withErrors(['error' => 'The post was not found']);
        }
    }
}
