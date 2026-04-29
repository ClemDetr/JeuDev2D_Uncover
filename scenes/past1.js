import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past1',"./assets/Past1.png")
    
    scene('past1', () => {
        add([
            
        sprite('past1',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}