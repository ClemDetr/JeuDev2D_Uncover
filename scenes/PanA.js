import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('panA',"./assets/250-panA.JPG")
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
        text("Les ruines de Lousonna qui sont devenues parc archéologique.",{
            size : 28,
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