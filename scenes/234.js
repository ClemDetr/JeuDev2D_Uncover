
export{
    init
}

function init() {
    loadSprite('234',"./assets/234.JPG")
    scene('234', () => {
        add([
        sprite('234',{
            width : width(),
            height : height()
        })
    ]);
    })
}