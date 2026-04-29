import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('cd1',"./assets/Past1.png")
    
    scene('cd1', () => {
        add([
            
        sprite('cd1',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

    })
}