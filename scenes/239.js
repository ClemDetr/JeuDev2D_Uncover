
export{
    init
}

function init() {
    loadSprite('239',"./assets/239.JPG")
    scene('239', () => {
        add([
        sprite('239',{
            width : width(),
            height : height()
        })
    ]);
    })
}