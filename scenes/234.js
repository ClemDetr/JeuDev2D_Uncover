import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('234',"./assets/234.JPG")
    scene('234', () => {
        add([
            sprite('234',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to227 = add([
            rect(width()*0.3,height()*0.25,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.9),
            area()
        ]);

        to227.onHover(() => invtry.cursor_pointer = true)
        to227.onHoverEnd(() => invtry.cursor_pointer = false)
        to227.onClick(() =>(go('227')));


        const to231 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.2,height()*0.5),
            area()
        ]);

        to231.onHover(() => invtry.cursor_pointer = true)
        to231.onHoverEnd(() => invtry.cursor_pointer = false)
        to231.onClick(() =>(go('231')));

        const to235 = add([
            rect(width()*0.7,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.7,height()*0.9),
            area()
        ]);
        
        to235.onHover(() => invtry.cursor_pointer = true)
        to235.onHoverEnd(() => invtry.cursor_pointer = false)
        to235.onClick(() => (go('239')));

        const to236 = add([
            rect(width()*0.3,height()*0.5,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to236.onHover(() => invtry.cursor_pointer = true)
        to236.onHoverEnd(() => invtry.cursor_pointer = false)
        to236.onClick(() => (go('236')));
    })
}