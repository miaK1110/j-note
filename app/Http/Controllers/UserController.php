<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function user_register(SignupRequest $req)
    {
      /** @var \App\Models\User */
        $name = $req->input('name');
        $email = $req->input('email');
        $password = Hash::make($req->input('password'));
        $user = User::create([
            'name' =>   $name,
            'email' =>  $email ,
            'password'=> $password,
            'created_at' => now(),
            'updated_at' => now(),
          ]);

          $token = $user->createToken('token')->plainTextToken;
          $cookie = cookie('jwt', $token, 60 *24); // 1day

          return response()->json([
            'status'=>200,
            'message'=> 'Userdata added successfully',
          ])->withCookie($cookie);
    }

    public function user_login(LoginRequest $req){
            /** @var \App\Models\User */
      $user = Auth::user();
      if(!Auth::attempt($req->only('email','password'))){
        return response()->json([
          'status'=>401,
          'message'=> 'Invalid credentials',
        ]);
      }

      $token = $user->createToken('token')->plainTextToken;
      $cookie = cookie('jwt', $token, 60 *24); // 1day
      return response()->json([
        'status'=>200,
        'message'=> 'User logined successfully',
      ])->withCookie($cookie);
    }

    public function user(){
      return Auth::user();
    }

    public function user_logout(){
$cookie = Cookie::forget('jwt');

return response()->json([
  'status'=>200,
  'message' => 'User logouted successfully'
])->withCookie($cookie);
    }
}
