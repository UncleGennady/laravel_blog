@props(['comment' => null, 'method' => 'POST', 'action'])
<x-form action="{{ $action }}" method="{{ $method }}">
    <h5>
        {{ __('Comment') }}
    </h5>
    <div class="mb-3">
        <label for="commentText" class="form-label"></label>
        <input type="text" name='text' class="form-control" id="commentText" placeholder="Exampe comment"
            value="{{ !!$comment ? $comment->text : '' }}">
    </div>
    @if (request()->post)
        <input type="hidden" name="post_id" id="post_id" value="{{ request()->post }}" />
    @endif
    <button type="submit" class="btn btn-success">Submit</button>
</x-form>
