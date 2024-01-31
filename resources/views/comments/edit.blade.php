@extends('layouts.layout')

@section('title')
    {{ 'comment' }}
@endsection

@section('body')
    <x-errors />
    <x-h1 class="text-center mb-3">
        {{ __('Edit comment') }}
    </x-h1>
    <div class="d-flex flex-column gap-4">
        <x-form.comment method="PATCH" action="{{ route('comments.update', ['comment' => $comment->id]) }}"
            :comment="$comment" />
    </div>
@endsection
