@extends('layouts.layout')

@section('title')
    {{ __('Reset password') }}
@endsection

@section('body')
    <x-form.authwrapp imageName="IMG_0050.jpg" title="Reset password" method="POST" :action="route('password.update')">
        <x-slot:otherLink>
            <div class="d-flex gap-3">
                <x-link.button href="/auth/login" class="btn-success">
                    Sign in
                </x-link.button>

                <x-link.button href="/auth/register" class="btn-success">
                    Sign up
                </x-link.button>
            </div>
        </x-slot:otherLink>

        <x-form.resetPassword :request="$request" />
    </x-form.authwrapp>
@endsection
