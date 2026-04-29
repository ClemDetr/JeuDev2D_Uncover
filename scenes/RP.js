import { invtry, cursor } from "../main.js"

export{
    init,
}

function init() {
    loadSprite('RP',"./assets/252-RP.JPG")
    scene('RP', () => {
    add([
        sprite('RP',{
            width : width(),
            height : height()
        })
    ]);
    cursor()


    const toEM = add([
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.05,height()*0.45),
        area()
    ]);


    const toOF = add([
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.9,height()*0.5),
        area()
    ]);


    

    toEM.onHover(() => invtry.cursor_pointer = true)
    toEM.onHoverEnd(() => invtry.cursor_pointer = false)
    toEM.onClick(() => (go('EM')));

    toOF.onHover(() => invtry.cursor_pointer = true)
    toOF.onHoverEnd(() => invtry.cursor_pointer = false)
    toOF.onClick(() => (go('OF')));
});
}