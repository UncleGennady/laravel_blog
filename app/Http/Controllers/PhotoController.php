<?php

namespace App\Http\Controllers;

use App\Contracts\ImageSaving;
use App\Models\Photo;
use App\Services\Image;
use Illuminate\Http\Request;
use Storage;

class PhotoController extends Controller
{

    protected function validatePhotos(Request $request)
    {
        return $request->validate([
            'images' => ['required', 'array', 'min:2', 'max:3'],
            'images.*' => ['file', 'max:25600', 'image',],
        ]);
    }

    public function create()
    {
        return view("photos.create");
    }

    public function edit($id)
    {
        $photoGroupe = Photo::findOrFail($id);

        return view("photos.edit", ['photoGroupe' => $photoGroupe]);
    }

    public function store(Request $request, ImageSaving $service)
    {
        $validated = $this->validatePhotos($request);
        $images = $validated['images'];
        $imagesPath = $service->save($images, 'portfolio');

        $photoGroupe = Photo::create([
            'images' => $imagesPath,
        ]);
        return redirect()->back()->with('status', "The photo groupe has been created");
    }

    public function update(Request $request, $id, ImageSaving $service)
    {
        $validated = $this->validatePhotos($request);
        $photoGroupe = Photo::find($id);
        Storage::delete($photoGroupe->images);
        $images = $validated['images'];
        $imagesPath = $service->save($images, 'portfolio');

        $photoGroupe->update([
            'images' => $imagesPath,
        ]);

        return redirect()->route('home')->with('status', "The photo groupe has been update");
    }

    public function destroy($id)
    {
        try {
            $photoGroupe = Photo::findOrFail($id);
            Storage::delete($photoGroupe->images);
            $photoGroupe->delete();
            return redirect()->route('home')->with('status', "The photo groupe has been deleted");
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return redirect()->route('home')->withErrors(['error' => 'The photo groupe was not found']);
        }
    }
}
