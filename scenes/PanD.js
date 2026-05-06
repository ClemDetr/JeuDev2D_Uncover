import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('PanD',"./assets/237-panD.JPG")
    scene('panD', () => {
        const panD = add([
            sprite('PanD',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        panD.add([
            rect(width(),height()*0.1),
            anchor("center"),
            color(0,0,0),
            pos(width()*0.5,height()*0.05)
        ])
        panD.add([
            text("Beaucoup de lézards sont présents dans les ruines.",{
                size : 28,
            }),
            pos(width()*0.5,height()*0.05),
            anchor("center")
        ])

        const to239 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to239.onHover(() => invtry.cursor_pointer = true)
        to239.onHoverEnd(() => setCursor("default"))
        to239.onClick(() =>(go('239')));
    })
}