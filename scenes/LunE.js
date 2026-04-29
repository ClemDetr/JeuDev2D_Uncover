import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('LunE',"./assets/233-lunE.JPG")
    scene('lunE', () => {
        add([
        sprite('LunE',{
            width : width(),
            height : height()
        })
        ]);
        cursor()

        const to231 = add([
            rect(width()*0.8,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.8),
            area()
        ]);

        to231.onHover(() => invtry.cursor_pointer = true)
        to231.onHoverEnd(() => invtry.cursor_pointer = false)
        to231.onClick(() => (go('231')));
    })
}