import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('LunD',"./assets/238-lunD.JPG")
    scene('lunD', () => {
        add([
            sprite('LunD',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to239 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to239.onHover(() => invtry.cursor_pointer = true)
        to239.onHoverEnd(() => invtry.cursor_pointer = false)
        to239.onClick(() =>(go('239')));
    })
}