import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('cd0',"./assets/CD0.png")
    loadSprite('keyDomus',"./assets/KeyDomus.png")
    
    scene('cd0', () => {
        add([
            
        sprite('cd0',{
            width : width(),
            height : height()
        })
        ]);
        cursor()

        const toCD1 = add([
            rect(width()*0.1,height()*0.5,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.15,height()*0.44),
            area()
        ]);

        toCD1.onHover(() => invtry.cursor_pointer = true)
        toCD1.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD1.onClick(() => (go('cd1')));

        if (!invtry.key_domus) {
            const keyDomus = add([
                sprite('keyDomus'),
                scale(0.1),
                anchor("center"),
                pos(width()*0.7, height()*0.5),
                area()

            ]);
            keyDomus.onHover(() => invtry.cursor_pointer = true)
            keyDomus.onHoverEnd(() => invtry.cursor_pointer = false)
            
            keyDomus.onClick(() => {
                invtry.key_domus = 1
                keyDomus.destroy()
            });
        }
    })
}