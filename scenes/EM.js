import { invtry, cursor } from "../main.js"

export{
    init,
}

function init() {
    loadSprite('EM',"./assets/253-EM.JPG")
    scene('EM', () => {
    add([
        sprite('EM',{
            width : width(),
            height : height()
        }),
    ]);
    cursor()

    const toRP = add([
        rect(width()/10,height()/2,{
            fill : false
        }),
        anchor("center"),
        pos(0,height()/2),
        area()
    ]);

    const toMus1 = add([
        rect(width()*0.14,height()*0.37,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.66,height()*0.69),
        area()
    ]);

    
    toMus1.onHover(() => invtry.cursor_pointer = true)
    toMus1.onHoverEnd(() => invtry.cursor_pointer = false)
    toMus1.onClick(() => (go('Mus1')));

    toRP.onHover(() => invtry.cursor_pointer = true)
    toRP.onHoverEnd(() => invtry.cursor_pointer = false)
    toRP.onClick(() => (go('RP')));
});
}