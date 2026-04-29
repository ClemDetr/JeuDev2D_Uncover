import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('217',"./assets/217.JPG")
    scene('217', () => {
        add([
            sprite('217',{
                width : width(),
                height : height()
            })
        ]);
        cursor()


        const to220 = add([
            rect(width()*0.2,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.2,height()*0.45),
            area()
        ]);

        to220.onHover(() => invtry.cursor_pointer = true)
        to220.onHoverEnd(() => invtry.cursor_pointer = false)
        to220.onClick(() => (go('220')));

        const to219 = add([
            rect(width()*0.15,height()*0.92,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);
        
        to219.onHover(() => invtry.cursor_pointer = true)
        to219.onHoverEnd(() => invtry.cursor_pointer = false)
        to219.onClick(() => (go('219')));


        const toPanF = add([
            rect(width()*0.17,height()*0.4,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.72,height()*0.4),
            area()
        ]);

        toPanF.onHover(() => invtry.cursor_pointer = true)
        toPanF.onHoverEnd(() => invtry.cursor_pointer = false)
        toPanF.onClick(() =>(go('PanF')));
    })
}