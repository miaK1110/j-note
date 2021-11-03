<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function user_register(UserRequest $req)
    {
        $name = $req->input('name');
        $email = $req->input('email');
        $password = Hash::make($req->input('password'));
        DB::table('users')->insert([
            'name' =>   $name,
            'email' =>  $email ,
            'password'=> $password,
            'created_at' => now(),
            'updated_at' => now(),
          ]);
          return response()->json([
            'status'=>200,
            'message'=> 'Userdata added successfully',
          ]);
    }
    // public function user_login(Request $req)
    // {
    //     $email =  $req->input('email');
    //     $password = $req->input('password');
    //     $user = Auth::user();
    //     var_dump($user);
    //     $user = DB::table('users')->where('email',$email)->first();
    //     if(!Hash::check($password, $user->password))
    //     {

    //                       /** @var \App\Models\User */
    //   // $user = Auth::user();
    //   $token = $user->createToken('token')->plainTextToken;

    //   $cookie = cookie('jwt', $token, 60 *24); // 1day
    //   return response()->json([
    //     'status'=>200,
    //     'message'=> 'User logined successfully',
    //   ])->withCookie($cookie);
    //     }
    //     else
    //     {
    //         //$user = DB::table('users')->where('email',$email)->first();
    //         return response()->json([
    //             'status'=>401,
    //             'message'=> 'Not matched',
    //           ]);
    //     }
    // }
    public function user_login(UserRequest $req){
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
