
export{
    init
}

function init() {
    loadSprite('PanD',"./assets/237-panD.JPG")
    scene('PanD', () => {
        add([
        sprite('PanD',{
            width : width(),
            height : height()
        })
    ]);
    })
}