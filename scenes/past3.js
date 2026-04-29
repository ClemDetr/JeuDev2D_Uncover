import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past3',"./assets/Past3.png")
    
    scene('past3', () => {
        add([
            
        sprite('past3',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}