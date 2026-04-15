
export{
    init
}

function init() {
    loadSprite('236',"./assets/236.JPG")
    scene('236', () => {
        add([
        sprite('236',{
            width : width(),
            height : height()
        })
    ]);
    })
}