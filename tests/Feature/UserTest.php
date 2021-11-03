<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function requiredValidation()
    {
        $data= [
            'email' => '',
            'password' => ''
        ];

        $response = $this->postJson('/user_login', $data);
        dd($response->json());
        $response->assertStatus(422)->assertJsonValidationErrors([
            'email'=>'Emailを入力してください',
            'password'=>'パスワードを入力してください'
        ]);
    }
    public function maxCharValidation()
    {
        $data= [
            'email' => str_repeat('a',256),
            'password' => str_repeat('a',256)
        ];

        $response = $this->postJson('/user_login', $data);
        dd($response->json());
        $response->assertStatus(422)->assertJsonValidationErrors([
            'email'=>'255文字以内で入力してください',
            'password'=>'255文字以内で入力してください'
        ]);
    }
}
