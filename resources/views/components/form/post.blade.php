@props(['post' => null, 'method' => 'POST', 'action'])
<x-form action="{{ $action }}" method="{{ $method }}" multipartFormData={{ true }}>
    <h5>
        {{ __('Title post') }}
    </h5>
    <div class="mb-3">
        <label for="titlePost" class="form-label"></label>
        <input type="text" name='title' class="form-control" id="titlePost" placeholder="Exampe title"
            value="{{ !!$post ? $post->title : '' }}">
    </div>
    <div>
        <h5>
            {{ __('Images') }}
        </h5>
        @if (!!$post && !!$post->images)
            <x-images :images="$post->images" />
        @endif
    </div>
    <div class="mb-3">
        <label for="images" class="form-label"></label>
        <input type="file" name='images[]' class="form-control" id="images" multiple>
    </div>
    <h5>
        {{ __('Content') }}
    </h5>
    <div class="mb-3">
        <x-trix content="{{ !!$post ? $post->content : '' }}" />
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
</x-form>
