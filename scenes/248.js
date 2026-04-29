import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('248',"./assets/248.JPG")
    scene('248', () => {
    add([
        sprite('248',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    const toOF = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    const to242 = add([
        rect(width()*0.3,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.55),
        area()
    ]);

    to242.onHover(() => invtry.cursor_pointer = true)
    to242.onHoverEnd(() => invtry.cursor_pointer = false)
    to242.onClick(() =>(go('242')));

    const to239 = add([
        rect(width()*0.3,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.8,height()*0.558),
        area()
    ]);

    to239.onHover(() => invtry.cursor_pointer = true)
    to239.onHoverEnd(() => invtry.cursor_pointer = false)
    to239.onClick(() =>(go('239')));

    const toPanC = add([
        rect(width()*0.02,height()*0.05,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.628,height()*0.558),
        area()
    ]);

    const toLunC = add([
        rect(width()*0.016,height()*0.06,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.599,height()*0.547),
        area()
    ]);

    
    toOF.onHover(() => invtry.cursor_pointer = true)
    toOF.onHoverEnd(() => invtry.cursor_pointer = false)
    toOF.onClick(() =>(go('OF')));

    

    toPanC.onHover(() => invtry.cursor_pointer = true)
    toPanC.onHoverEnd(() => invtry.cursor_pointer = false)
    toPanC.onClick(() =>(go('panC')));

    toLunC.onHover(() => invtry.cursor_pointer = true)
    toLunC.onHoverEnd(() => invtry.cursor_pointer = false)
    toLunC.onClick(() =>(go('lunC')));
});
}