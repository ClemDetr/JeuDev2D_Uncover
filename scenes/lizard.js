
export{
    init
}

function init() {
    loadSprite('lizard',"./assets/lizard.JPG")
    scene('lizard', () => {
        add([
        sprite('lizard',{
            width : width(),
            height : height()
        })
    ]);
    })
}