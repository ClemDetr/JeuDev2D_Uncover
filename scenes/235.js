
export{
    init
}

function init() {
    loadSprite('235',"./assets/235.JPG")
    scene('235', () => {
        add([
        sprite('235',{
            width : width(),
            height : height()
        })
    ]);
    })
}