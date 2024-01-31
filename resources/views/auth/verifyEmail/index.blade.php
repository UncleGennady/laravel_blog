@extends('layouts.layout')

@section('title')
    {{ __('Verify email') }}
@endsection

@section('body')
    <x-form.authwrapp imageName="IMG_0074.jpg" title="Verify email" method="POST" :action="route('verification.send')">
        @if (session('status'))
            <x-notification type="success">
                {{ session('status') }}
            </x-notification>
        @endif
        <x-form.verifyEmail />
    </x-form.authwrapp>
@endsection
