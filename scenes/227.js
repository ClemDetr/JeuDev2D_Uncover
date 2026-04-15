
export{
    init
}

function init() {
    loadSprite('227',"./assets/227.JPG")
    scene('227', () => {
        add([
        sprite('227',{
            width : width(),
            height : height()
        })
    ]);
    })
}