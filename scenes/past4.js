import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past4',"./assets/Past4.png")
    
    scene('past4', () => {
        add([
            
        sprite('past4',{
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
            pos(width()*0.7,height()*0.4),
            area()
        ]);

        toPast1.onHover(() => invtry.cursor_pointer = true)
        toPast1.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast1.onClick(() => (go('past1')));

    })
}