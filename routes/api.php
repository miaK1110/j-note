<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\UserController;
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

// Route::group(['middleware' => 'auth:sanctum'], function(){
//     Route::apiResource()
// })

Route::post('add-user', [UserController::class, 'user_register']);
// Route::post('login', [UserController::class, 'user_login']);

Route::post('login', [UserController::class, 'user_login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::get('user', [UserController::class, 'user']);
    Route::post('logout', [UserController::class, 'user_logout']);
});


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
