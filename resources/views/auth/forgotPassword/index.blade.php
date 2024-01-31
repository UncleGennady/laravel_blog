@extends('layouts.layout')

@section('title')
    {{ __('Forgot password') }}
@endsection

@section('body')
    <x-form.authwrapp imageName="IMG_0067.jpg" title="Forgot password" method="POST" :action="route('forgot-password.store')">
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
        @if (session('status'))
            <x-notification type="success">
                {{ session('status') }}
            </x-notification>
        @endif
        <x-form.forgotPassword />
    </x-form.authwrapp>
@endsection
