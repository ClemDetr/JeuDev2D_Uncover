import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('220',"./assets/220.JPG")
    scene('220', () => {
        add([
            sprite('220',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to221 = add([
            rect(width()*0.2,height()*0.4,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);
        
        to221.onHover(() => invtry.cursor_pointer = true)
        to221.onHoverEnd(() => invtry.cursor_pointer = false)
        to221.onClick(() => (go('221')));

        const to217 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to217.onHover(() => invtry.cursor_pointer = true)
        to217.onHoverEnd(() => invtry.cursor_pointer = false)
        to217.onClick(() =>(go('217')));
    })
}