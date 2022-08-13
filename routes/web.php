<?php

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any('/{any}', function () {
    try {
        $index = Storage::disk('website')->get('index.html');
        return $index;
    } catch (FileNotFoundException $exception) {
        return 'Missing front-end build';
    }
})->where('any', '.*');