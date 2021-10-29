<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    function user_register(Request $req)
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
    function user_login(Request $req)
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
                'status'=>400,
                'message'=> 'Not matched',
              ]);
        }
    }
}
