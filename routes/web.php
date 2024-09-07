<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

Route::get('/', [FrontendController::class, 'index']);
Route::get('home', [FrontendController::class, 'index'])->name('home');

Route::get('/privacy', function () {
    return view('privacy');
})->name('privacy');

Route::get('/term', function () {
    return view('term');
})->name('term');

Route::get('/project', function () {
    return view('project');
})->name('project');
