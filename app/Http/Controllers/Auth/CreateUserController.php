<?php
 
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CreateUserController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users'],
            //confirmed -> password_confirmation must be equal to password
            'password' => [
                'required',
                'min:8',
                'confirmed',
                'string',
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => [],
                'errors' => $validator->errors()->all()
            ], 401);
        }

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);

        $token = $user->createToken('web')->plainTextToken;

        return response()->json([
            'data' => [
                'user' => $user,
                'token' => $token,
            ]
        ], 200);      
    }
}