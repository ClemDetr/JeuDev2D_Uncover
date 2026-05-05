import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('lizard',"./assets/lizard.JPG")
    loadSprite('keyArche',"./assets/star.png")
    
    scene('lizard', () => {
        add([
        sprite('lizard',{
            width : width(),
            height : height()
        })
        ]);
        cursor()
        
        
        const to230 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to230.onHover(() => invtry.cursor_pointer = true)
        to230.onHoverEnd(() => invtry.cursor_pointer = false)
        to230.onClick(() =>(go('230')));

        if (!invtry.key_arche) {
            const keyArche = add([
                sprite('keyArche'),
                anchor("center"),
                pos(width()*0.4, height()*0.2),
                area()

            ]);
            keyArche.onHover(() => invtry.cursor_pointer = true)
            keyArche.onHoverEnd(() => invtry.cursor_pointer = false)
            
            keyArche.onClick(() => {
                invtry.key_arche = true
                invtry.cursor_pointer = false
                keyArche.destroy()
            });
        } 
    })
}