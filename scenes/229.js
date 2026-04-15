
export{
    init
}

function init() {
    loadSprite('229',"./assets/229.JPG")
    scene('229', () => {
        add([
        sprite('229',{
            width : width(),
            height : height()
        })
    ]);
    })
}