@extends('layouts.layout')

@section('title')
    {{ 'post' }}
@endsection

@section('body')
    <x-errors />
    <x-h1 class="text-center mb-3">
        {{ __('Edite post') }}
    </x-h1>
    <div class="d-flex flex-column gap-4">
        <x-form.post method="PATCH" action="{{ route('posts.update', ['post' => $post->id]) }}"
            :post="$post"></x-form.post>
    </div>
@endsection
