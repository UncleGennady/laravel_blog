@extends('layouts.layout')

@section('title')
    {{ 'comment' }}
@endsection

@section('body')
    <x-errors />
    <x-h1 class="text-center mb-3">
        {{ __('Create comment') }}
    </x-h1>
    <div class="d-flex flex-column gap-4">
        <x-form.comment action="{{ route('comments.store') }}" />
    </div>
@endsection
