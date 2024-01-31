<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerificationNotificationController;
use App\Http\Controllers\EmailVerificationPromptController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->prefix('auth')->group(function () {
    Route::prefix('login')->group(
        function () {
            Route::get('/', [AuthController::class, 'loginIndex'])->name('login.index');
            Route::post('/', [AuthController::class, "signIn"])->name('signIn');
        }

    );

    Route::prefix('register')->group(
        function () {
            Route::get('/', [AuthController::class, 'registerIndex'])->name('register.index');
            Route::post('/', [AuthController::class, "signUp"])->name('signUp');
        }
    );
})->name('auth');

Route::prefix('/logout')->group(
    function () {
        Route::get('/', function () {
            return redirect('home');
        });
        Route::post('/', [AuthController::class, 'logout'])->middleware('auth')->name("logout");
    }
);

Route::middleware('guest')->prefix('/forgot-password')->group(
    function () {
        Route::get('/', [ForgotPasswordController::class, 'create'])->name('forgot-password');
        Route::post('/', [ForgotPasswordController::class, 'store'])->name('forgot-password.store');
    }
);

Route::middleware('guest')->prefix('/reset-password')->group(
    function () {
        Route::get('/', [ResetPasswordController::class, 'create'])->name('password.reset');
        Route::post('/', [ResetPasswordController::class, 'store'])->name('password.update');
    }
);

Route::middleware('auth')->prefix('/email')->group(
    function () {
        Route::get('/verify', [EmailVerificationPromptController::class, '__invoke'])->name('verification.notice');

        Route::get('/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])->middleware(['signed'])->name('verification.verify');

        Route::post('/verification-notification', [EmailVerificationNotificationController::class, '__invoke'])->middleware(['throttle:6,1'])->name('verification.send');
    }
);

Route::redirect('/login', '/auth/login');
Route::redirect('/auth', '/auth/login');
Route::redirect('/auth/logout', '/logout');
Route::redirect('/register', '/auth/register');
