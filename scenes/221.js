
export{
    init
}

function init() {
    loadSprite('221',"./assets/221.JPG")
    scene('221', () => {
        add([
        sprite('221',{
            width : width(),
            height : height()
        })
    ]);
    })
}