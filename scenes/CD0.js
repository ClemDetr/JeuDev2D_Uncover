import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past1',"./assets/Past1.png")
    
    scene('cd0', () => {
        add([
            
        sprite('cd0',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}