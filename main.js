import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
kaplay();


"Sprites load"
loadSprite('bg-base',"./assets/battleback10.png")


setBackground(BLACK)

scene('base', () => {
    add([
        sprite('bg-base')
    ])
});

go('base');