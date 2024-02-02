let mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .js("resources/js/anime.js", "public/js")
    .js("resources/js/trix.js", "public/js")
    .css("resources/css/app.css", "public/css");
