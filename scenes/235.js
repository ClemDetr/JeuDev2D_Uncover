import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('235',"./assets/235.JPG")
    scene('235', () => {
        add([
            sprite('235',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to234 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to234.onHover(() => invtry.cursor_pointer = true)
        to234.onHoverEnd(() => invtry.cursor_pointer = false)
        to234.onClick(() =>(go('234')));

        const to239 = add([
                rect(width()*0.3,height()*0.2,{
                    fill : false
                }),
                anchor("center"),
                pos(width()*0.7,height()*0.558),
                area()
            ]);

        to239.onHover(() => invtry.cursor_pointer = true)
        to239.onHoverEnd(() => invtry.cursor_pointer = false)
        to239.onClick(() =>(go('239')));

        const to236 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);
        
        to236.onHover(() => invtry.cursor_pointer = true)
        to236.onHoverEnd(() => invtry.cursor_pointer = false)
        to236.onClick(() => (go('236')));
    })
}