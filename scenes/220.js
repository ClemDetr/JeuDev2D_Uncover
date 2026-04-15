
export{
    init
}

function init() {
    loadSprite('220',"./assets/220.JPG")
    scene('220', () => {
        add([
        sprite('220',{
            width : width(),
            height : height()
        })
    ]);
    })
}