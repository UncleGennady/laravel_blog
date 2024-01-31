@extends('layouts.layout')

@section('title')
    {{ __('Register') }}
@endsection

@section('body')
    <x-errors />
    <x-form.authwrapp title="Sign Up" method="POST" :imageName="'IMG_9309.jpg'" :action="route('signUp')">
        <x-slot:otherLink>
            <x-link.button href="/auth/login" class="btn-success">
                Sign in
            </x-link.button>
        </x-slot:otherLink>
        <x-form.register />
    </x-form.authwrapp>
@endsection
