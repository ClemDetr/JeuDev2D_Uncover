import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('PanF',"./assets/218-panF.JPG")
    scene('panF', () => {
        add([
        sprite('PanF',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    const to217 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to217.onHover(() => invtry.cursor_pointer = true)
    to217.onHoverEnd(() => invtry.cursor_pointer = false)
    to217.onClick(() => (go('217')));
    })
}