<?php

namespace App\Http\Controllers;

use App\Jobs\EmailVerificationJob;
use App\Models\Role;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    protected function validateSignIn(Request $request)
    {
        return $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);
    }

    protected function validateSignUp(Request $request)
    {
        return $request->validate([
            'firstName' => ['required', 'string', 'min:1', 'max:50'],
            'lastName' => ['required', 'string', 'min:1', 'max:50'],
            'email' => ['required', 'unique:users', 'string', 'email'],
            'password' => ['required', 'string', 'min:7', 'confirmed'],
            'agreement' =>  ['accepted']
        ]);
    }

    public function loginIndex()
    {
        return view('auth.login.index');
    }

    public function signIn(Request $request)
    {
        $validated = $this->validateSignIn($request);

        $remember = $request->has('remember') ? true : false;

        if (!Auth::attempt($validated, $remember)) {
            throw ValidationException::withMessages(['email' => 'Incorrect email or password.',]);

            // return back()->withInput()->withErrors([
            //     'email' => 'Incorrect email or password.',
            // ]);
        }

        $request->session()->regenerate();

        return redirect()->intended('dashboard');
    }


    public function registerIndex()
    {
        return view('auth.register.index');
    }




    public function signUp(Request $request)
    {
        $validated = $this->validateSignUp($request);
        $validated['active'] = true;


        $user = User::create([
            'first_name' => $validated['firstName'],
            'last_name' => $validated['lastName'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'active' => $validated['active'],
        ]);

        event(new Registered($user));

        $role = Role::where('name', "USER")->firstOrFail();

        $user->assignRole($role);

        Auth::login($user);

        return redirect()->route('dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('home');
    }
}



// protected function validateRegistration(Request $request)
// {
//     return Validator::make($request->all(), [
//         'firstName' => ['required', 'string', 'min:1', 'max:50'],
//         'lastName' => ['required', 'string', 'min:1', 'max:50'],
//         'email' => ['required', 'unique:users', 'string', 'email'],
//         'password' => ['required', 'string', 'min:7', 'confirmed'],
//         'agreement' =>  ['accepted']
//     ]);
// }

// public function signUp(Request $request)
// {
//     $validator = $this->validateRegistration($request);

//     if ($validator->fails()) {
//         return redirect()->back()->withErrors($validator)->withInput();
//     }

//     $validated = $validator->validate();

//     $validated['active'] = true;

//     $user = User::create([
//         'first_name' => $validated['firstName'],
//         'last_name' => $validated['lastName'],
//         'email' => $validated['email'],
//         'password' => Hash::make($validated['password']),
//         'active' => $validated['active'],
//     ]);

//     Auth::login($user);

//     return redirect()->route('dashboard');
// }
