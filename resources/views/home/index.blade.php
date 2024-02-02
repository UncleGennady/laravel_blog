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
    {{-- @if (hasRole('ADMIN'))
        bb
    @endif --}}
    @role('ADMIN')
        <div class="py-3 d-flex justify-content-center">
            <x-link.button href="{{ route('photos.create') }}" class="btn-success"> Add photo groupe</x-link.button>
        </div>
    @endrole
    <x-h1 class="text-center animeTitle pb-4">
        Welcome to the website of photographer Elizabeth Shamray!
    </x-h1>
    <x-home.portfolio :photos="$photos" />
    <x-home.about class="animeTitle" />
@endsection

@section('aside')
    @parent
    <p>
        Home aside
    </p>
@endsection

@pushOnce('js')
    <script src="/js/anime.js"></script>
@endPushOnce

{{-- @php
    $user = \App\Models\User::first()->roles->toArray();
    dd($user);
@endphp --}}
