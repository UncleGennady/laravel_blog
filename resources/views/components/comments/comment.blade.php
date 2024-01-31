@props(['comment'])
<div class="d-flex gap-4 p-1 p-md-4 pb-0 border-bottom border-dark">
    <ul class=" list-unstyled pb-4 w-25 ">
        <li class=" pb-2">
            <span class="fw-bold border-bottom border-dark"> author:</span><span> {{ $comment->user->fullName }}</span>
        </li>
        <li class= "pb-2">
            <span class="fw-bold border-bottom border-dark"> date:</span><span> {{ $comment->date }}</span>
        </li>
        <li class="d-flex gap-2 gap-md-3">
            @if (optional(auth()->user())->id === $comment->user_id)
                <x-link.button href="{{ route('comments.edit', $comment->id) }}" class="btn-primary">
                    {{ __('edit') }}
                </x-link.button>
            @endif
            @role('ADMIN')
                <x-form action="{{ route('comments.destroy', ['comment' => $comment->id]) }}" method="DELETE">
                    <x-button class=" btn-danger" type="submit">
                        Delete
                    </x-button>
                </x-form>
            @endrole
        </li>
    </ul>
    <div class= "border-start border-dark ps-1 ps-md-4 w-75">
        <p class="pb-4 m-0">
            {{ $comment->text }}
        </p>
    </div>
</div>
