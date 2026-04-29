import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('223',"./assets/223.JPG")
    scene('223', () => {
        add([
        sprite('223',{
            width : width(),
            height : height()
        })
        ]);
        cursor()
    
        const to222 = add([
            rect(width()*0.9,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to222.onHover(() => invtry.cursor_pointer = true)
        to222.onHoverEnd(() => invtry.cursor_pointer = false)
        to222.onClick(() =>(go('222')));

        const to224 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to224.onHover(() => invtry.cursor_pointer = true)
        to224.onHoverEnd(() => invtry.cursor_pointer = false)
        to224.onClick(() => (go('224')));
    })
}