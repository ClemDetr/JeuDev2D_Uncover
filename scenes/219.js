import { invtry } from "../main.js"

export{
    init
}

function init() {
    loadSprite('hand',"./assets/hand.png")
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

        to217.onHover(() => document.body.className = "crosshair")
        to217.onHoverEnd(() => document.body.className = "default")
        to217.onClick(() =>(go('217')));

        const arche = add([
            sprite('arche'),
            scale(0.7),
            pos(width()*0.5,height()*0.5),
            anchor('center'),
            area()
        ])

        arche.onHover(() => setCursor("hand"))
        arche.onHoverEnd(() => setCursor("default"))
        if (invtry.key_arche) {
            
            arche.onClick(() =>(
                arche.play("open"),
                wait(2, () => {
                    go('past0')
                })
                
            ));
        }else{
            var info
            arche.onClick(() =>{
                info = add([
                    rect(width(),height()*0.1),
                    color(255,255,255),
                    pos(0,height()*0.9)
                ]),
                info.add([
                    text("Il faudrait trouver une pierre pour finir la structure...", {
                        width : width()*0.7,
                        size : 20,
                        z : 10
                    }),
                    color(0,0,0),
                    pos(10,20)
                ]), 
                wait(3, () =>{
                    info.destroy()
                })
            });
        }
            
    })
}