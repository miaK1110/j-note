<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Hash;
use Socialite;
use Str;
use App\user;

class socialLoginController extends Controller
{
    public function github($provider){
        // send the user request to github
        return Sociaslite::driver($provider)->redirect();
    }
    public function githubRedirect($provider){
        // get OAuth request from github to authenticate user

        try{
        $socialUser = Socialite::driver($provider)->user();
        }
        // dd($user);


        catch(\Exception $exception){
        // $user = User::firstOrCreate([
        // 'email'=>$user->email
        // ],['name'=>$user->name,
        // 'password'=> Hash::make(Str::random(24))]);
    }

        $user = User::where(['provider_id'=>$socialUser->getId(),
        'provider_name'=>$provider
        ])->first();

        // if this user doesn't exist, add them
        // if they do, get the model
        // either way, authenticate the user into the application and redirect afterwords

        if(!$user){
            $user = User::create([
                'name'=> $socialUser->getNickname(),
                'email'=> $socialUser->getEmail(),
                'provider_id'=> $socialUser->getId(),
                'provider_name'=>$provider
            ]);
        }
                Auth::login($user, true);

    }
    public function google(){

    }
    public function googleRedirect(){

    }
    public function twitter(){

    }
    public function twitterRedirect(){

    }
}
