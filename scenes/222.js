import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('222',"./assets/222.JPG")
    scene('222', () => {
        add([
            sprite('222',{
                width : width(),
                height : height()
            })
     
        ]);
        cursor()

        const to223 = add([
            rect(width()*0.9,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to223.onHover(() => invtry.cursor_pointer = true)
        to223.onHoverEnd(() => invtry.cursor_pointer = false)
        to223.onClick(() =>(go('223')));

        const to221 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.3,height()*0.5),
            area()
        ]);

        to221.onHover(() => invtry.cursor_pointer = true)
        to221.onHoverEnd(() => invtry.cursor_pointer = false)
        to221.onClick(() => (go('221')));
    })

}