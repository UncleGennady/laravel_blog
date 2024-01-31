<?php

namespace App\Services;

use App\Contracts\ImageSaving;

class Image implements ImageSaving
{
    public function saveImages(array $images, string $storeName)
    {
        $imagesPath = [];
        foreach ($images as $image) {
            $path = $image->store($storeName);
            $imagesPath[] = $path;
        }
        return $imagesPath;
    }
    public function save($images, $storeName)
    {
        return $this->saveImages($images, $storeName);
    }
}
