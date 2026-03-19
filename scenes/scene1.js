import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import { leftbase } from "./scene2.js";

export{
    base,
}

kaplay();


"Sprites load"
loadSprite('bg-base',"./assets/battleback10.png")
loadSprite('arrow',"./assets/arrow.png")


scene('base', () => {
    add([
        sprite('bg-base')
    ]);

    const leftArrow = add([
        sprite('arrow',{
            flipX: true
        }),
        pos(30,300),
        area()
    ]);

    const rightArrow = add([
        sprite('arrow'),
        pos(950,300),
        area()
    ]);

    leftArrow.onClick(() => (go(leftbase)))

});