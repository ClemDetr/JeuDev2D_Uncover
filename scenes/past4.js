import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past4',"./assets/Past4.png")
    
    scene('past4', () => {
        add([
            
        sprite('past4',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}