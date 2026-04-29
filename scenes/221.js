import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('221',"./assets/221.JPG")
    scene('221', () => {
        add([
            sprite('221',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to222 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);
        

        to222.onHover(() => invtry.cursor_pointer = true)
        to222.onHoverEnd(() => invtry.cursor_pointer = false)
        to222.onClick(() => (go('222')));

        const to228 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to228.onHover(() => invtry.cursor_pointer = true)
        to228.onHoverEnd(() => invtry.cursor_pointer = false)
        to228.onClick(() =>(go('228')));

        const to220 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to220.onHover(() => invtry.cursor_pointer = true)
        to220.onHoverEnd(() => invtry.cursor_pointer = false)
        to220.onClick(() =>(go('220')));
    })
}