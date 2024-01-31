<div class="card">
    {{-- <img src=" {{ asset('storage/' . $post->images[rand(0, count($post->images) - 1)]) }}" class="card-img-top"
        alt="..."> --}}
    <img src=" {{ asset('storage/' . $post->images[0]) }}" class="card-img-top" alt="...">
    <div class="card-body">
        <h3 class="card-text">
            <x-link href="{{ route('posts.show', ['post' => $post->id]) }}">
                {{ $post->title }}
            </x-link>
        </h3>

        <p class='text-muted text-end'>
            {{ $post->date }}
        </p>
    </div>
</div>
