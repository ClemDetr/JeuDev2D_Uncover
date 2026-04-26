export{
    init
}

function init() {
    loadSprite('past0',"./assets/Past0.png")
    
    scene('past0', () => {
        add([
            
        sprite('past0',{
            width :
             width(),
            height : height()
        })
        ]);
        setCursor("default")

    })
}