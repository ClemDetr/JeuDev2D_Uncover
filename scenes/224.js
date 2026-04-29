import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('224',"./assets/224.JPG")
    scene('224', () => {
        add([
        sprite('224',{
            width : width(),
            height : height()
        })
        ]);
        cursor()


        const to225 = add([
            rect(width()*0.3,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to225.onHover(() => invtry.cursor_pointer = true)
        to225.onHoverEnd(() => invtry.cursor_pointer = false)
        to225.onClick(() =>(go('225')));

        const to223 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to223.onHover(() => invtry.cursor_pointer = true)
        to223.onHoverEnd(() => invtry.cursor_pointer = false)
        to223.onClick(() =>(go('223')));
    })
}