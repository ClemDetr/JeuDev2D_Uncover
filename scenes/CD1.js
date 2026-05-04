import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('cd1',"./assets/CD1.png")
    
    scene('cd1', () => {
        add([
            
        sprite('cd1',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast3 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.74,height()*0.36),
            area()
        ]);

        toPast3.onHover(() => invtry.cursor_pointer = true)
        toPast3.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast3.onClick(() => (go('past3')));

        const toCD0 = add([
            rect(width()*0.1,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.379),
            area()
        ]);

        toCD0.onHover(() => invtry.cursor_pointer = true)
        toCD0.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD0.onClick(() => (go('cd0')));


        const toCD2 = add([
            rect(width()*0.2,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.33,height()*0.38),
            area()
        ]);

        toCD2.onHover(() => invtry.cursor_pointer = true)
        toCD2.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD2.onClick(() => (go('cd2')));
    })
}