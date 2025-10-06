<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;
use Throwable;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $email = $request->input('email');
            $password = $request->input('password');
            DB::beginTransaction();
            $user = User::where('email', $email)->first();
            if (! $user || ! Hash::check($password, $user->password)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid credentials'
                ], 401);
            }
            $token = Uuid::uuid4()->toString();
            $user->api_token = $token;
            $user->save();
            DB::commit();
            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'user' => $user,
                'api_token' => $token,
            ]);
        } catch (Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
