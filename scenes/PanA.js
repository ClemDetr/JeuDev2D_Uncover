import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('panA',"assets/250-panA.jpg")
    scene('panA', () =>{
    const panA = add([
        sprite('panA',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    panA.add([
            rect(width(),height()*0.1),
            anchor("center"),
            color(0,0,0),
            pos(width()*0.5,height()*0.05)
        ])
    panA.add([
        text("Les ruines sont très populaires, le collectionneur disparu doit être dans un endroit plus caché. Vers la forêt peut-être ?",{
            size : height()*0.03,
            width : width()*0.8
        }),
        pos(width()*0.5,height()*0.05),
        anchor("center")
    ])

    const toOF = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    toOF.onHover(() => invtry.cursor_pointer = true)
    toOF.onHoverEnd(() => invtry.cursor_pointer = false)
    toOF.onClick(() => (go('OF')));
});
}