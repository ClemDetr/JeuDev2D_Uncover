import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past0',"./assets/Past0.png")
    
    scene('past0', () => {
        add([
            
        sprite('past0',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast1 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.5),
            area()
        ]);

        toPast1.onHover(() => invtry.cursor_pointer = true)
        toPast1.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast1.onClick(() => (go('past1')));
    })
}