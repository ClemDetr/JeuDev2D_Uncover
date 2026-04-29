import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('244',"./assets/244.JPG")
    scene('244', () => {
    add([
        sprite('244',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    const to242 = add([
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.5),
        area()
    ]);

    

    const to225 = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    
    

    to242.onHover(() => invtry.cursor_pointer = true)
    to242.onHoverEnd(() => invtry.cursor_pointer = false)
    to242.onClick(() =>(go('242')));

    to225.onHover(() => invtry.cursor_pointer = true)
    to225.onHoverEnd(() => invtry.cursor_pointer = false)
    to225.onClick(() =>(go('225')));
    
});
}