@extends('layouts.layout')

@section('title')
    {{ 'post' }}
@endsection
@section('body')
    <x-errors />
    @if (session('status'))
        <x-notification type="success">
            {{ session('status') }}
        </x-notification>
    @endif

    <div>
        <div class="d-flex align-items-center gap-5 mb-3">
            <div class="">
                <x-link.button href="{{ route('posts') }}" class="btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        id="Capa_1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 459 459"
                        style="enable-background:new 0 0 459 459;" xml:space="preserve">
                        <g>
                            <g id="reply">
                                <path
                                    d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z" />
                            </g>
                        </g>
                    </svg>
                    <span class="px-2">
                        {{ __('back') }}
                    </span>
                </x-link.button>
            </div>
            <x-h1 class="text-center">
                {{ $post->title }}
            </x-h1>
        </div>
        @role('ADMIN')
            <div class=" d-flex justify-content-center gap-3 pb-3">
                <x-link.button href="{{ route('posts.edit', $post->id) }}" class="btn-success">
                    {{ __('edit') }}
                </x-link.button>
                <x-form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="DELETE">
                    <x-button class=" btn-danger" type="submit">
                        Delete
                    </x-button>
                </x-form>
            </div>
        @endrole
    </div>
    <div class="d-flex flex-column gap-4">
        <x-slider :images="$post->images" />
        <div class="fs-5 p-3 border-dark border-bottom border-top">
            {!! $post->content !!}

        </div>
        <div class="text-end fs-6 text-bold fw-bold">
            <p>
                Views {{ $post->view_count }}
            </p>
            <div>
                <p>
                    Likes {{ $post->favorites->count() }}
                </p>
                <x-form action="{{ route('posts.like', ['post' => $post->id]) }}" method="POST">
                    <x-buttonLike postId="{{ $post->id }}" />
                </x-form>
            </div>
        </div>
    </div>
    <div>
        <x-link.button href="{{ route('comments.create', ['post' => $post->id]) }}" class="btn-primary">
            {{ __('Add comment') }}
        </x-link.button>
    </div>
    <div>
        <x-comments.post :comments="$post->comments->load('user')" />
    </div>
@endsection
