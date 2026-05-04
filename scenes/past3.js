import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past3',"./assets/Past3.png")
    
    scene('past3', () => {
        add([
            
        sprite('past3',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast1 = add([
            rect(width()*0.8,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        toPast1.onHover(() => invtry.cursor_pointer = true)
        toPast1.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast1.onClick(() => (go('past1')));

        const toCD1 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.5),
            area()
        ]);

        toCD1.onHover(() => invtry.cursor_pointer = true)
        toCD1.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD1.onClick(() => (go('cd1')));

    })
}