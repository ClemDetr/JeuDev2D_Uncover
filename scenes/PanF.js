import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('PanF',"./assets/218-panF.JPG")
    scene('panF', () => {
        const panF = add([
            sprite('PanF',{
                width : width(),
                height : height()
            })
        ]);
        cursor()
        panF.add([
            rect(width(),height()*0.1),
            anchor("center"),
            color(0,0,0),
            pos(width()*0.5,height()*0.05)
        ])
        panF.add([
            text("Un chemin mène plus loin dans la forêt à droite de ce panneau!",{
                size : 28,
                width : width()*0.8
            }),
            pos(width()*0.5,height()*0.05),
            anchor("center")
        ])

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