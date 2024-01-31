@props(['content' => ''])
<input id="trix" type="hidden" name="content" value="{!! $content !!}">
<trix-editor input="trix"></trix-editor>
@pushOnce('css')
    <link rel="stylesheet" type="text/css" href="/css/trix.css">
@endPushOnce
@pushOnce('js')
    <script type="text/javascript" src="/js/trix.js"></script>
@endPushOnce
