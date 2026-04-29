import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('226',"./assets/226.JPG")
    scene('226', () => {
        add([
            sprite('226',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to225 = add([
            rect(width()*0.8,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to225.onHover(() => invtry.cursor_pointer = true)
        to225.onHoverEnd(() => invtry.cursor_pointer = false)
        to225.onClick(() =>(go('225')));

        const to227 = add([
            rect(width()*0.2,height()*0.8,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to227.onHover(() => invtry.cursor_pointer = true)
        to227.onHoverEnd(() => invtry.cursor_pointer = false)
        to227.onClick(() =>(go('227')));
    })
}