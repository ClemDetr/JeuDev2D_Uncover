import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('panC',"./assets/240-panC.JPG")
    scene('panC', () =>{
    const PanC = add([
        sprite('panC',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    PanC.add([
            rect(width(),height()*0.1),
            anchor("center"),
            color(0,0,0),
            pos(width()*0.5,height()*0.05)
        ])
    PanC.add([
        text("Les ruines sont très populaires, le collectionneur disparu doit être dans un endroit secret.",{
            size : 28,
            width : width()*0.8
        }),
        pos(width()*0.5,height()*0.05),
        anchor("center")
    ])

    const to248 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to248.onHover(() => invtry.cursor_pointer = true)
    to248.onHoverEnd(() => invtry.cursor_pointer = false)
    to248.onClick(() => (go('248')));
});
}