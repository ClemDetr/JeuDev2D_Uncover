import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('236',"./assets/236.JPG")
    scene('236', () => {
        add([
            sprite('236',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to235 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width(),height()*0.5),
            area()
        ]);
        
        to235.onHover(() => invtry.cursor_pointer = true)
        to235.onHoverEnd(() => invtry.cursor_pointer = false)
        to235.onClick(() => (go('235')));

        const to230 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to230.onHover(() => invtry.cursor_pointer = true)
        to230.onHoverEnd(() => invtry.cursor_pointer = false)
        to230.onClick(() =>(go('230')));
    })
}