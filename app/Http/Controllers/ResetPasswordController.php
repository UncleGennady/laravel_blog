<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{

    protected function validateResetPassword(Request $request)
    {
        return $request->validate([
            'token' => ['required'],
            'email' => ['required', 'string', 'email',],
            'password' => ['required', 'string', 'min:7', 'confirmed']
        ]);
    }
    public function create(Request $request)
    {
        return view('auth.resetPassword.index', ['request' => $request]);
    }

    public function store(Request $request)
    {
        $validated = $this->validateResetPassword($request);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60)
                ])->save();
            }
        );

        if ($status === Password::PASSWORD_RESET) {
            return redirect()->route('signIn')->with('status', trans($status));
        }

        return back()->withInput($request->only('email'))
            ->withErrors(['email' => trans($status)]);
    }
}
