@extends('layouts.layout')

@section('title text')
    {{ __('Blog') }}
@endsection

@section('body')
    <x-errors />
    @if (session('status'))
        <x-notification type="success">
            {{ session('status') }}
        </x-notification>
    @endif
    <x-h1 class="text-center animeTitle">
        {{ __('LizSharm Blog') }}
    </x-h1>
    <div>
        <ul class="row list-unstyled">
            @foreach ($posts as $post)
                <li class="col-12 col-md-6 col-lg-4 d-flex flex-column gap-2 align-items-center mb-3">
                    <x-card class="animeCard" :post="$post" />
                </li>
            @endforeach
        </ul>
    </div>
    <nav aria-label="...">
        <ul class="pagination">


            <li class="page-item {{ $posts->onFirstPage() ? 'disabled' : '' }}">
                <a class="page-link" href="{{ $posts->previousPageUrl() }}" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>


            @foreach ($posts->getUrlRange(1, $posts->lastPage()) as $page => $url)
                <li class="page-item {{ $page == $posts->currentPage() ? 'active' : '' }}">
                    <a class="page-link" href="{{ $url }}">{{ $page }}</a>
                </li>
            @endforeach


            <li class="page-item {{ $posts->hasMorePages() ? '' : 'disabled' }}">
                <a class="page-link" href="{{ $posts->nextPageUrl() }}" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
@endsection

@pushOnce('js')
    <script src="/js/anime.js"></script>
@endPushOnce
