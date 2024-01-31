@props(['comments' => null])
@if ($comments)
    <div>
        <ul class=" d-flex flex-column gap-3 list-unstyled">

            @foreach ($comments as $comment)
                <li>
                    <x-comments.comment :comment="$comment" />
                </li>
            @endforeach
        </ul>
    </div>
@endif
