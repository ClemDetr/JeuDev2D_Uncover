import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('231',"./assets/231.JPG")
    scene('231', () => {
        add([
            sprite('231',{
                width : width(),
                height : height()
            })
        ]);
        cursor()

        const to228 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to228.onHover(() => invtry.cursor_pointer = true)
        to228.onHoverEnd(() => invtry.cursor_pointer = false)
        to228.onClick(() =>(go('221')));


        const to230 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(0,height()*0.5),
            area()
        ]);

        to230.onHover(() => invtry.cursor_pointer = true)
        to230.onHoverEnd(() => invtry.cursor_pointer = false)
        to230.onClick(() =>(go('230')));

        const to234 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width(),height()*0.5),
            area()
        ]);
        
        to234.onHover(() => invtry.cursor_pointer = true)
        to234.onHoverEnd(() => invtry.cursor_pointer = false)
        to234.onClick(() => (go('234')));


        const toPanE = add([
            rect(width()*0.09,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.825,height()*0.744),
            area()
        ]);
        
        toPanE.onHover(() => invtry.cursor_pointer = true)
        toPanE.onHoverEnd(() => invtry.cursor_pointer = false)
        toPanE.onClick(() =>(go('panE')));

        const toLunE = add([
            rect(width()*0.07,height()*0.35,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.7,height()*0.7),
            area()
        ]);

        toLunE.onHover(() => invtry.cursor_pointer = true)
        toLunE.onHoverEnd(() => invtry.cursor_pointer = false)
        toLunE.onClick(() =>(go('lunE')));
    })
}