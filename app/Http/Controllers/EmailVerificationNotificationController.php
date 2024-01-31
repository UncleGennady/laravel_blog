<?php

namespace App\Http\Controllers;

use App\Jobs\EmailVerificationJob;
use App\Jobs\ResendEmailVerificationJob;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    public function __invoke(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            redirect()->intended('/dashboard');
        };
        // $request->user()->sendEmailVerificationNotification();
        dispatch(new ResendEmailVerificationJob($request->user()));

        return back()->with('status', 'Verification link sent!');
    }
}
