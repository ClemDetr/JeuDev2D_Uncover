import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('230',"./assets/230.JPG")
    scene('230', () => {
        add([
            sprite('230',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to231 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to231.onHover(() => invtry.cursor_pointer = true)
        to231.onHoverEnd(() => invtry.cursor_pointer = false)
        to231.onClick(() =>(go('231')));

        const tolizard = add([
            rect(width()*0.09,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.3,height()*0.744),
            area()
        ]);

        tolizard.onHover(() => invtry.cursor_pointer = true)
        tolizard.onHoverEnd(() => invtry.cursor_pointer = false)
        tolizard.onClick(() =>(go('lizard')));

        const to236 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width(),height()*0.5),
            area()
        ]);
        
        to236.onHover(() => invtry.cursor_pointer = true)
        to236.onHoverEnd(() => invtry.cursor_pointer = false)
        to236.onClick(() => (go('236')));
    })
}