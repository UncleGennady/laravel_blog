{{-- @props(['images' => null]) --}}
<div class="row">
    @foreach ($images as $image)
        <div class="col-4 mb-3">
            <img class=" w-100" src="{{ asset('storage/' . $image) }}" alt="#">
        </div>
    @endforeach
</div>
