@extends('layouts.layout')

@section('title text')
    Home
@endsection

@section('body')
    <x-errors />
    @if (session('status'))
        <x-notification type="success">
            {{ session('status') }}
        </x-notification>
    @endif
    <x-h1 class="text-center mb-3">
        {{ __('Add photos') }}
    </x-h1>
    <div>
        <x-form.photo action="{{ route('photos.store') }}" />
    </div>
@endsection
