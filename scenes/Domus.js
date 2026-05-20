import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('domus',"assets/Domus.png")
    loadSprite('collectionneur',"assets/Collectionneur.png")
    
    scene('domus', () => {
        add([ 
            sprite('domus',{
                width :
                width(),
                height : height()
            })
        ]);
        cursor()

        const collectionneur = add([
            sprite('collectionneur'),
            scale(0.4),
            anchor("center"),
            area(),
            pos(width()*0.3,height()*0.5)
        ]);

        collectionneur.onHover(() => invtry.cursor_pointer = true)
        collectionneur.onHoverEnd(() => invtry.cursor_pointer = false)
        collectionneur.onClick(() => {
            collectionneur.add([
                rect(width(), height()*0.6,{
                        fill : true
                }),
                anchor("center"),
                pos(collectionneur.width*2,height()*0.5)
            ]),
            collectionneur.add([
                text("Merci de m'avoir retrouvé ! J'espère que tu as apprécié la visite des ruines et de Lousonna. N'hésite pas à visiter le musée pour en apprendre plus sur l'histoire de la région !", {
                    width : width(),
                    size : height()*0.08,
                }),
                color(0,0,0),
                anchor("center"),
                pos(collectionneur.width*2+5,height()*0.5)
            ]),
            wait(10, () => {
                collectionneur.destroy()
                invtry.key_domus = false
                invtry.key_arche = false
                go('menu')
            })
        })
    })
}