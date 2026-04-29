import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('lunA',"./assets/251-lunA.JPG")
    scene('lunA', () =>{
    add([
        sprite('lunA',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

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