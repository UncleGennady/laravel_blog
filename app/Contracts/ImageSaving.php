<?php

namespace App\Contracts;

interface ImageSaving
{

    /**
     * @param array $images
     * @param string $storeName
     * @return array
     */
    public function save($images, $storeName);
}
