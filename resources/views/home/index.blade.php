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
    <section class=" d-flex flex-column-reverse gap-3">
        @foreach ($photos as $groupeIndex => $groupe)
            <div class="d-flex gap-3 photos-row">
                @role('ADMIN')
                    <div class=" d-flex gap-2 photos-editor-buttons">
                        <x-link.button href="{{ route('photos.edit', ['photoGroupe' => $groupe->id]) }}" class="btn-primary">
                            {{ __('Edit row') }}
                        </x-link.button>
                        <x-form action="{{ route('photos.destroy', ['photoGroupe' => $groupe->id]) }}" method="DELETE">
                            <x-button class=" btn-danger" type="submit">
                                {{ __('Delete row') }}
                            </x-button>
                        </x-form>
                    </div>
                @endrole
                @foreach ($groupe->images as $photoIndex => $photo)
                    <div class=" blur w-50">
                        <button type="button" class="m-0 p-0 border-0" data-bs-toggle="modal"
                            data-bs-target="#exampleModal{{ $groupeIndex }}{{ $photoIndex }}">
                            <img class="w-100" src={{ asset('storage/' . $photo) }} alt="">
                        </button>
                    </div>
                    <div class="modal fade" id="exampleModal{{ $groupeIndex }}{{ $photoIndex }}" tabindex="-1"
                        aria-labelledby="exampleModalLabel{{ $groupeIndex }}{{ $photoIndex }}" aria-hidden="true">
                        <div class="modal-dialog  modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel{{ $groupeIndex }}{{ $photoIndex }}">
                                        Photo card</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img class="w-100" src={{ asset('storage/' . $photo) }} alt="">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </section>
@endsection

@section('aside')
    @parent
    <p>
        Home aside
    </p>
@endsection

{{-- @php
    $user = \App\Models\User::first()->roles->toArray();
    dd($user);
@endphp --}}
