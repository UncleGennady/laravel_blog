<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'active', "role:ADMIN"])->prefix('posts')->group(function () {
    Route::get('/', [PostController::class, 'index'])->withoutMiddleware(['auth', 'active', "role:ADMIN"])->name('posts');
    Route::get('/create', [PostController::class, 'create'])->name('posts.create');
    Route::get('/{post}', [PostController::class, 'show'])->withoutMiddleware(['auth', 'active', "role:ADMIN"])->name('posts.show');
    Route::get('/{post}/edit', [PostController::class, 'edit'])->name('posts.edit')->whereNumber('post');
    Route::post('/', [PostController::class, 'store'])->name('posts.store');
    Route::post('/{post}/like', [FavoriteController::class, '__invoke'])->withoutMiddleware(["role:ADMIN"])->name('posts.like');
    Route::patch('/{post}', [PostController::class, 'update'])->name('posts.update')->whereNumber('post');
    Route::delete('/{post}', [PostController::class, 'destroy'])->name('posts.destroy')->whereNumber('post');
});
