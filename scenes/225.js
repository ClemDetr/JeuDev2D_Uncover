import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('225',"./assets/225.JPG")
    scene('225', () => {
        add([
            sprite('225',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to226 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to226.onHover(() => invtry.cursor_pointer = true)
        to226.onHoverEnd(() => invtry.cursor_pointer = false)
        to226.onClick(() =>(go('226')));

        const to244 = add([
            rect(width()*0.3,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.6),
            area()
        ]);

        to244.onHover(() => invtry.cursor_pointer = true)
        to244.onHoverEnd(() => invtry.cursor_pointer = false)
        to244.onClick(() =>(go('244')));

        const to224 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to224.onHover(() => invtry.cursor_pointer = true)
        to224.onHoverEnd(() => invtry.cursor_pointer = false)
        to224.onClick(() =>(go('224')));
    })
}