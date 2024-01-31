@php
    $links = [
        (object) [
            'name' => 'home',
            'title' => 'Home',
            'href' => '/',
        ],
        (object) [
            'name' => 'posts*',
            'title' => 'Blog',
            'href' => '/posts',
        ],
        (object) [
            'name' => 'login.index',
            'title' => 'Login',
            'href' => '/auth/login',
        ],
        (object) [
            'name' => 'register.index',
            'title' => 'Register',
            'href' => '/auth/register',
        ],
        (object) [
            'name' => 'dashboard',
            'title' => 'Dashboard',
            'href' => route('dashboard'),
        ],
        (object) [
            'name' => 'logout',
            'title' => 'Logout',
            'href' => route('logout'),
        ],
    ];
@endphp
<header>
    <x-container>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Laravel Test</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav gap-lg-4">
                        @foreach ($links as $link)
                            @if ($link->name === 'login.index' || $link->name === 'register.index')
                                @guest
                                    <li class="nav-item">
                                        <x-link.header name="{{ $link->name }}" href="{{ $link->href }}">
                                            {{ $link->title }}
                                        </x-link.header>
                                    </li>
                                @endguest
                            @elseif($link->name === 'dashboard')
                                @auth
                                    <li class="nav-item">
                                        <x-link.header name="{{ $link->name }}" href="{{ $link->href }}">
                                            {{ $link->title }}
                                        </x-link.header>
                                    </li>
                                @endauth
                            @elseif($link->name === 'logout')
                                @auth
                                    <li class="nav-item">
                                        <form method="POST" action="{{ route('logout') }}">
                                            @csrf
                                            <x-link.header onclick="event.preventDefault(); this.closest('form').submit();"
                                                name="{{ $link->name }}" href="{{ $link->href }}">
                                                {{ $link->title }}
                                            </x-link.header>
                                        </form>
                                    </li>
                                @endauth
                            @else
                                <li class="nav-item">
                                    <x-link.header name="{{ $link->name }}" href="{{ $link->href }}">
                                        {{ $link->title }}
                                    </x-link.header>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                </div>
            </div>
        </nav>
    </x-container>
</header>
