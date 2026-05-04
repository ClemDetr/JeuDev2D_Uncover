import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past1',"./assets/Past1.png")
    
    scene('past1', () => {
        add([
            
        sprite('past1',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast0 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        toPast0.onHover(() => invtry.cursor_pointer = true)
        toPast0.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast0.onClick(() => (go('past0')));

        const toPast3 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        toPast3.onHover(() => invtry.cursor_pointer = true)
        toPast3.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast3.onClick(() => (go('past3')));

        const toPast4 = add([
            rect(width()*0.8,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        toPast4.onHover(() => invtry.cursor_pointer = true)
        toPast4.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast4.onClick(() => (go('past4')));
    })
}