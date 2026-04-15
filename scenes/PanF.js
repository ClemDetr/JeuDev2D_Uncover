
export{
    init
}

function init() {
    loadSprite('PanF',"./assets/218-panF.JPG")
    scene('PanF', () => {
        add([
        sprite('PanF',{
            width : width(),
            height : height()
        })
    ]);
    })
}