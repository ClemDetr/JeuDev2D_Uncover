
export{
    init
}

function init() {
    loadSprite('223',"./assets/223.JPG")
    scene('223', () => {
        add([
        sprite('223',{
            width : width(),
            height : height()
        })
    ]);
    })
}