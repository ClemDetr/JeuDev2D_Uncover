import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('242',"./assets/242.JPG")
    scene('242', () => {
    add([
        sprite('242',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    const to248 = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    to248.onHover(() => invtry.cursor_pointer = true)
    to248.onHoverEnd(() => invtry.cursor_pointer = false)
    to248.onClick(() =>(go('248')));

    const to244 = add([
        rect(width()*0.2,height()*0.1,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.7,height()*0.558),
        area()
    ]);

    to244.onHover(() => invtry.cursor_pointer = true)
    to244.onHoverEnd(() => invtry.cursor_pointer = false)
    to244.onClick(() =>(go('244')));

    const toLizard = add([
        rect(width()*0.06,height()*0.06,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.547),
        area()
    ]);

    toLizard.onHover(() => invtry.cursor_pointer = true)
    toLizard.onHoverEnd(() => invtry.cursor_pointer = false)
    toLizard.onClick(() =>(go('lizard2')));

    
    
});
}
