@extends('layouts.layout')

@section('title text')
    Dashboard
@endsection
{{-- @dump(
    auth()->user()->load(['roles', 'favorites.post'])->favorites
) --}}

@php
    $favorites = auth()
        ->user()
        ->load('favorites.post')->favorites;
@endphp

@section('body')
    <h1>Profile</h1>
    @role('ADMIN')
        <ul class="d-flex flex-column gap-3 list-unstyled">
            <li>
                <x-link.button href="{{ route('posts.create') }}" class="btn-success">Create post</x-link.button>
            </li>
            <li>
                <x-link.button href="{{ route('photos.create') }}" class="btn-success">Add photo groupe</x-link.button>
            </li>
            <li>
                <x-link.button href="{{ route('ban.search') }}" class="btn-danger">Ban user page</x-link.button>
            </li>
        </ul>
    @endrole
    <div>
        <h3>
            Your info:
        </h3>
        <ul class=" list-unstyled">
            <li>
                {{ auth()->user()->fullName }}
            </li>

            <li>
                {{ auth()->user()->email }}
            </li>
        </ul>
    </div>
    <div>
        <h3>
            Your favorites:
        </h3>
        <ul class="row list-unstyled">
            @foreach ($favorites as $item)
                <li class="col-12 col-md-6 col-lg-4 d-flex flex-column gap-2 align-items-center mb-3">
                    <x-card :post="$item->post" />
                </li>
            @endforeach
        </ul>
    </div>
@endsection
