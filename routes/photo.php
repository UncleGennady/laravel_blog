<?php

use App\Http\Controllers\PhotoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'active', "role:ADMIN"])->prefix('photos')->group(function () {

    Route::get('/create', [PhotoController::class, 'create'])->name('photos.create');
    Route::get('/{photoGroupe}/edit', [PhotoController::class, 'edit'])->name('photos.edit')->whereNumber('photoGroupe');
    Route::post('/', [PhotoController::class, 'store'])->name('photos.store');
    Route::patch('/{photoGroupe}', [PhotoController::class, 'update'])->name('photos.update')->whereNumber('photoGroupe');
    Route::delete('/{photoGroupe}', [PhotoController::class, 'destroy'])->name('photos.destroy')->whereNumber('photoGroupe');
});
