@props(['onclick' => null, 'href' => '#'])

<a {{ $attributes->merge(['class' => 'nav-link']) }}
    @if ($onclick) onclick="{{ $onclick }}" @endif aria-current="page" href="{{ $href }}">
    {{ $slot }}
</a>
