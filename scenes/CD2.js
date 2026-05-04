import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('cd2',"./assets/CD2.png")
    
    scene('cd2', () => {
        add([
            
        sprite('cd2',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        onClick(() => console.log(mousePos(), width(), height()))
        const toCD1 = add([
            rect(width()*0.2,height()*0.2,{
                fill : true
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.45),
            area()
        ]);

        toCD1.onHover(() => invtry.cursor_pointer = true)
        toCD1.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD1.onClick(() => (go('cd1')));

        const toDomus = add([
            rect(width()*0.2,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.33,height()*0.38),
            area()
        ]);

        toDomus.onHover(() => invtry.cursor_pointer = true)
        toDomus.onHoverEnd(() => invtry.cursor_pointer = false)
        toDomus.onClick(() => (go('domus')));
    })
}