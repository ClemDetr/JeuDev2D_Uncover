import { invtry } from "../main.js"

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
        setCursor("default")

        const keyArche = add([
            sprite('keyArche'),
            anchor("center"),
            pos(width()*0.4, height()*0.2),
            area()

        ]);
        keyArche.onHover(() => setCursor("crosshair"))
        keyArche.onHoverEnd(() => setCursor("default"))
        
        keyArche.onClick(() => {
            invtry.key_arche = 1
            keyArche.destroy()
        });

        const to230 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to230.onHover(() => setCursor("crosshair"))
        to230.onHoverEnd(() => setCursor("default"))
        to230.onClick(() =>(go('230')));
    })
}