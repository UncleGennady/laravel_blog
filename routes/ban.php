<?php

use App\Http\Controllers\BanController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'active', "role:ADMIN"])->prefix('ban')->group(function () {
    Route::get('/', [BanController::class, 'search'])->name('ban.search');
    Route::patch('/{user}', [BanController::class, 'update'])->name('ban.update')->whereNumber('user');
});
