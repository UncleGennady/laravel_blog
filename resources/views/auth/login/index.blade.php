@extends('layouts.layout')

@section('title')
    {{ __('Login') }}
@endsection

@section('body')
    <x-errors />
    <x-form.authwrapp title="Sing in" method="POST" :action="route('signIn')">
        <x-slot:otherLink>
            <x-link.button href="/auth/register" class="btn-success">
                Sign up
            </x-link.button>
        </x-slot:otherLink>
        @if (session('status'))
            <x-notification type="success">
                {{ session('status') }}
            </x-notification>
        @endif
        <x-form.login />
    </x-form.authwrapp>
@endsection
