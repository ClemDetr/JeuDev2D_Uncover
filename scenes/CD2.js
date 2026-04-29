import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('cd2',"./assets/Past1.png")
    
    scene('cd2', () => {
        add([
            
        sprite('cd2',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}