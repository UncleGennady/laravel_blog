<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProductController;
use App\Models\Photo;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $photos = Photo::all();
    return view('home.index', ['photos' => $photos]);
})->name('home');
Route::redirect('/home', '/');

Route::view('/dashboard', 'dashboard.index')->middleware('auth', 'verified', 'active')->name('dashboard');









Route::get('/products', [ProductController::class, 'index']);
