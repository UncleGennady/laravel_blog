@props(['photoGroupe' => null, 'method' => 'POST', 'action'])
<x-form action="{{ $action }}" method="{{ $method }}" multipartFormData={{ true }}>
    <div>
        <h5>
            {{ __('Images') }}
        </h5>
        @if (!!$photoGroupe && !!$photoGroupe->images)
            <x-images :images="$photoGroupe->images" />
        @endif
    </div>
    <div class="mb-3">
        <label for="images" class="form-label"></label>
        <input type="file" name='images[]' class="form-control" id="images" multiple>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
</x-form>
