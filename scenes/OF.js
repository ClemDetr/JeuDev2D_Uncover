import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('OF',"assets/249-OF.jpg")
    scene('OF', () => {
    const of =add([
        sprite('OF',{
            width : width(),
            height : height()
        })
    ]);
    of.add([
            rect(width()*0.3, height()*0.1, {
                fill : true
            }),
            color(192,173,80),
            anchor("center"),
            pos(width()*0.7,height()*0.3-2)
        ])
    of.add([
        text("Des panneaux d'informations sont dispersés dans les ruines. Clique sur eux pour en savoir plus !",{
            size : height()*0.025,
            width : width()*0.25,
            align : "center",
        }),
        color(0,0,0),
        anchor("center"),
        pos(width()*0.7,height()*0.3)
    ])
    cursor()

    const toRP = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    const to248 = add([
        rect(width()*0.3,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.6,height()*0.55),
        area()
    ]);

    const toPanA = add([
        rect(width()*0.09,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.65),
        area()
    ]);

    const toLunA = add([
        rect(width()*0.09,height()*0.4,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.3,height()*0.65),
        area()
    ]);

    toRP.onHover(() => invtry.cursor_pointer = true)
    toRP.onHoverEnd(() => invtry.cursor_pointer = false)
    toRP.onClick(() =>(go('RP')));

    to248.onHover(() => invtry.cursor_pointer = true)
    to248.onHoverEnd(() => invtry.cursor_pointer = false)
    to248.onClick(() => (go('248')));

    toPanA.onHover(() => invtry.cursor_pointer = true)
    toPanA.onHoverEnd(() => invtry.cursor_pointer = false)
    toPanA.onClick(() =>(go('panA')));

    toLunA.onHover(() => invtry.cursor_pointer = true)
    toLunA.onHoverEnd(() => invtry.cursor_pointer = false)
    toLunA.onClick(() =>(go('lunA')));
});
}