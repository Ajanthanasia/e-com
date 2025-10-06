<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserRegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function (Request $request) {
    return response()->json([
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ]);
});

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [UserRegisterController::class, 'store']);
