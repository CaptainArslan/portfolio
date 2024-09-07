<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

Route::get('/', [FrontendController::class, 'index'])->name('index');
Route::get('home', [FrontendController::class, 'index'])->name('home');
// Route::get('about', [FrontendController::class, 'about'])->name('about');
// Route::get('contact', [FrontendController::class, 'contact'])->name('contact');
Route::get('policies', [FrontendController::class, 'privacy'])->name('policies');
Route::get('terms', [FrontendController::class, 'terms'])->name('terms');
Route::get('projects', [FrontendController::class, 'projects'])->name('projects');
