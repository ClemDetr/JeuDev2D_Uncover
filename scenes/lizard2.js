import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('lizard2',"./assets/lizard2.JPG")
    scene('lizard2', () => {
        add([
            sprite('lizard2',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to242 = add([
            rect(width(),height()*0.5,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.75),
            area()
        ]);

        to242.onHover(() => invtry.cursor_pointer = true)
        to242.onHoverEnd(() => invtry.cursor_pointer = false)
        to242.onClick(() =>(go('242')));
    })
}