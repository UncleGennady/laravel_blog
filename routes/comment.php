<?php

use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth','active'])->prefix('comments')->group(function () {
    Route::get('/{post}/create', [CommentController::class, 'create'])->name('comments.create')->whereNumber('post');
    Route::get('/{comment}/edit', [CommentController::class, 'edit'])->name('comments.edit')->whereNumber('comment');
    Route::post('/', [CommentController::class, 'store'])->name('comments.store');
    Route::patch('/{comment}', [CommentController::class, 'update'])->name('comments.update')->whereNumber('comment');
    Route::delete('/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy')->whereNumber('comment');
});
