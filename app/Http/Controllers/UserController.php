<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function user_register(Request $req)
    {
        $name = $req->input('name');
        $email = $req->input('email');
        $password = Hash::make($req->input('password'));
        DB::table('users')->insert([
            'name' =>   $name,
            'email' =>  $email ,
            'password'=> $password
          ]);
          return response()->json([
            'status'=>200,
            'message'=> 'Userdata added successfully',
          ]);
    }
    public function user_login(Request $req)
    {
        $email =  $req->input('email');
        $password = $req->input('password');

        $user = DB::table('users')->where('email',$email)->first();
        if(!Hash::check($password, $user->password))
        {
            return response()->json([
                'status'=>200,
                'message'=> 'User logined successfully',
              ]);
        }
        else
        {
            //$user = DB::table('users')->where('email',$email)->first();
            return response()->json([
                'status'=>401,
                'message'=> 'Not matched',
              ]);
        }
    }
    public function sunctum_login(Request $req){
      if(!Auth::attempt($req->only('email','password'))){
        return response()->json([
          'status'=>401,
          'message'=> 'Invalid credentials',
        ]);
      }else{

      }
      $user = Auth::user();
      $token = $user->createToken('token')->plainTextToken;

      $cookie = cookie('jwt', $token, 60 *24); // 1day
      return response()->json([
        'status'=>200,
        'message'=> 'User logined successfully',
      ])->withCookie($cookie);
    }
}
