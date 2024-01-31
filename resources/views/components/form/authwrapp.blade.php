@props(['imageName' => 'IMG_0042.jpg', 'title' => 'Sign in/up', 'action', 'method' => 'POST', 'otherLink' => null])
<div>
    <div class="row justify-content-center ">
        <div class="col-md-7 col-lg-5">
            <div class="shadow-lg rounded-3 overflow-hidden bg-secondary bg-opacity-25">
                <div>
                    <img class="w-100" src="{{ asset('storage/images/' . $imageName) }}" alt="Login Header Image">
                </div>
                <div class=" p-4 p-md-5">
                    <div class="d-flex">
                        <div
                            class="w-100 d-flex justify-content-between align-items-center border-bottom border-black pb-1 mb-2">
                            <h3 class="  ">{{ $title }}</h3>
                            @if (!!$otherLink)
                                {{ $otherLink }}
                            @endif
                        </div>
                    </div>
                    <x-form action="{{ $action }}" method="{{ $method }}">
                        {{ $slot }}
                    </x-form>
                </div>
            </div>
        </div>
    </div>
</div>
