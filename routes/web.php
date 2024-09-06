<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
})->name('index');

Route::get('/privacy', function () {
    return view('privacy');
})->name('privacy');

Route::get('/term', function () {
    return view('term');
})->name('term');

Route::get('/project', function () {
    return view('project');
})->name('project');