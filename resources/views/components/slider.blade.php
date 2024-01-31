<div class="d-flex justify-content-center">
    @if (!!count($images))
        <div id="carouselExampleIndicators" class="carousel slide  px-md-5">
            <div class="carousel-indicators">
                @if (count($images) > 1)
                    @foreach ($images as $index => $item)
                        <button type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={{ $index }} class="{{ $index === 0 ? 'active' : '' }}"
                            aria-current="true" aria-label="Slide {{ $index }}"></button>
                    @endforeach
                @endif

            </div>
            <div class="carousel-inner">
                @foreach ($images as $index => $item)
                    <div class="carousel-item {{ $index === 0 ? 'active' : '' }}">
                        <img src="{{ asset('storage/' . $item) }}" class="d-block w-100" alt="...">
                    </div>
                @endforeach

            </div>
            @if (count($images) > 1)
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            @endif
        </div>
    @else
        <div>
            <h3>
                Images not found
            </h3>
        </div>
    @endif
</div>
