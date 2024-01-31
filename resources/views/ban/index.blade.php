@extends('layouts.layout')

@section('title')
    {{ 'ban' }}
@endsection

@section('body')
    <x-errors />
    @if (session('status'))
        <x-notification type="success">
            {{ session('status') }}
        </x-notification>
    @endif
    <x-h1 class="text-center mb-3">
        {{ __('Ban page') }}
    </x-h1>
    <div class="d-flex flex-column gap-4">
        <x-form action="{{ route('ban.search') }}" method="GET">
            <div class="mb-3">
                <label for="search" class="form-label">Search</label>
                <input type="text" name="search" class="form-control" id="search" placeholder="Search" required>
            </div>

            <x-button type="submit" class="btn-success">
                search
            </x-button>
        </x-form>
        <ul class=" list-unstyled row ">
            @foreach ($users as $user)
                <li class="d-flex justify-content-between  col-12 col-md-6 col-lg-4  p-2">
                    <div class="p-2 w-100 border {{ $user->active ? 'border-success' : 'border-danger' }} ">
                        <div>
                            <p>
                                Name: <span class="fw-bold text-muted">
                                    {{ $user->fullName }}
                                </span>
                            </p>
                            <p>
                                Email: <span class="fw-bold text-muted">{{ $user->email }}</span>
                            </p>
                            <p>
                                Email Varified : <span
                                    class="fw-bold text-muted">{{ $user->email_verified_at ? 'true' : 'false' }}</span>
                            </p>
                            <p>
                                Status: <span
                                    class="fw-bold {{ $user->active ? 'text-success' : 'text-danger' }} ">{{ $user->active ? 'active' : 'ban' }}</span>
                            </p>
                            @if ($user->hasRole('ADMIN'))
                                <p class="text-warning">
                                    User is ADMIN
                                </p>
                            @endif
                        </div>
                        @if (!$user->hasRole('ADMIN') && auth()->user()->id !== $user->id)
                            <x-form action="{{ route('ban.update', ['user' => $user->id]) }}" method="PATCH">
                                <x-button type="submit" class=" {{ $user->active ? 'btn-danger' : 'btn-success' }}">
                                    {{ $user->active ? 'ban' : 'activate' }}
                                </x-button>
                            </x-form>
                        @endif
                    </div>

                </li>
            @endforeach
        </ul>
    </div>
@endsection
