import anime from "animejs";

anime({
    targets: ".anime",
    opacity: 100,
    translateX: [-500, 0],
    // delay: anime.stagger(100, { start: 0 }),
    easing: "easeInOutQuad",
});

anime({
    targets: ".animeCard",
    opacity: 100,
    translateX: [-1000, 0],
    delay: anime.stagger(200),
});
anime({
    targets: ".animeTitle",
    opacity: 100,
    translateX: [1000, 0],
});
