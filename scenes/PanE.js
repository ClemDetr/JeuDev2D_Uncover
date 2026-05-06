import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('PanE',"./assets/232-panE.JPG")
    scene('panE', () => {
        const panE = add([
            sprite('PanE',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        panE.add([
            rect(width(),height()*0.1),
            anchor("center"),
            color(0,0,0),
            pos(width()*0.5,height()*0.05)
        ])
        panE.add([
            text("Il y a un grand panneau d'information plus loin.",{
                size : 28,
            }),
            pos(width()*0.5,height()*0.05),
            anchor("center")
        ])

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