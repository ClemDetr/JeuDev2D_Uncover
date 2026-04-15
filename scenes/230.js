
export{
    init
}

function init() {
    loadSprite('230',"./assets/230.JPG")
    scene('230', () => {
        add([
        sprite('230',{
            width : width(),
            height : height()
        })
    ]);
    })
}