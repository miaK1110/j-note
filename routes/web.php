<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

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

Route::get('/', function () {
    return view('index');
});

// social sign in for github
Route::get('/sign-in/{provider}', [SocialLoginController::class, 'github']);
Route::get('/sign-in/{provider}/redirect', [SocialLoginController::class, 'githubRedirect']);
// social sign in for google
Route::get('/sign-in/{provider}', [SocialLoginController::class, 'google']);
Route::get('/sign-in/{provider}/redirect', [SocialLoginController::class, 'googleRedirect']);
// social sign in for twitter
Route::get('/sign-in/{provider}', [SocialLoginController::class, 'twitter']);
Route::get('/sign-in/{provider}/twitter', [SocialLoginController::class, 'twitterRedirect']);