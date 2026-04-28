import { invtry } from "../main.js"

export{
    init
}

function init() {
    loadSprite('219',"./assets/219.JPG")
    loadSprite('arche',"./assets/arche.png",{
                sliceX : 2,
                anims:{
                    "open":{from: 0, to: 1}
                }
            })
    scene('219', () => {
        add([
            
        sprite('219',{
            width :
             width(),
            height : height()
        })
        ]);
        setCursor("default")

        const to217 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to217.onHover(() => setCursor("crosshair"))
        to217.onHoverEnd(() => setCursor("default"))
        to217.onClick(() =>(go('217')));

        const arche = add([
            sprite('arche'),
            scale(0.7),
            pos(width()*0.5,height()*0.5),
            anchor('center'),
            area()
        ])

        if (invtry.key_arche) {
            arche.onHover(() => setCursor("crosshair"))
            arche.onHoverEnd(() => setCursor("default"))
            arche.onClick(() =>(
                arche.play("open"),
                wait(2, () => {
                    go('past0')
                })
                
            ));
        }
    })
}