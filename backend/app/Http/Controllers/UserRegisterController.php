<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;
use Throwable;

class UserRegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRegisterRequest $request)
    {
        try {
            $fname = $request->input('fname');
            $lname = $request->input('lname');
            $email = $request->input('email');
            $contact = $request->input('contact');
            $password = $request->input('password');

            $user = new User();
            $user->fname = $fname;
            $user->lname = $lname;
            $user->email = $email;
            $user->contact = $contact;
            $user->password = Hash::make($password);
            $user->role = 0; // Default role as user
            $user->setRememberToken(Uuid::uuid4()->toString());
            $user->save();

            return response()->json([
                'status' => true,
                'message' => 'User registered successfully'
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
