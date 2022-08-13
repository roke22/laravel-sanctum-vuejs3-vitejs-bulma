<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/user', [App\Http\Controllers\Auth\CreateUserController::class, 'create'])->name('users.create');
Route::middleware('web')->post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('users.login');
Route::middleware('web')->get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('users.logout');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
