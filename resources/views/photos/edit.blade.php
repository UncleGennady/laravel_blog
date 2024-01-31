@extends('layouts.layout')

@section('title text')
    Photos
@endsection

@section('body')
    <x-errors />
    @if (session('status'))
        <x-notification type="success">
            {{ session('status') }}
        </x-notification>
    @endif
    <x-h1 class="text-center mb-3">
        {{ __('Edit photos') }}
    </x-h1>
    <div>
        <x-form.photo method="PATCH" action="{{ route('photos.update', ['photoGroupe' => $photoGroupe->id]) }}"
            :photoGroupe="$photoGroupe" />
    </div>
@endsection
