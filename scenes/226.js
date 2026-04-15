
export{
    init
}

function init() {
    loadSprite('226',"./assets/226.JPG")
    scene('226', () => {
        add([
        sprite('226',{
            width : width(),
            height : height()
        })
    ]);
    })
}