import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('domus',"./assets/Domus.png")
    
    scene('domus', () => {
        add([
            
        sprite('domus',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}