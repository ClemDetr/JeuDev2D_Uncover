import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('228',"./assets/228.JPG")
    scene('228', () => {
        add([
            sprite('228',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to221 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to221.onHover(() => invtry.cursor_pointer = true)
        to221.onHoverEnd(() => invtry.cursor_pointer = false)
        to221.onClick(() =>(go('221')));


        const to231 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to231.onHover(() => invtry.cursor_pointer = true)
        to231.onHoverEnd(() => invtry.cursor_pointer = false)
        to231.onClick(() =>(go('231')));
    
    })
}