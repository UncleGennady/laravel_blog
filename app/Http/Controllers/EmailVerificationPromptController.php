<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmailVerificationPromptController extends Controller
{
    public function __invoke(Request $request)
    {
        return $request->user()->hasVerifiedEmail() ?  redirect()->intended('/dashboard') : view('auth.verifyEmail.index');
    }
}
