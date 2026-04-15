
export{
    init
}

function init() {
    loadSprite('LunD',"./assets/238-lunD.JPG")
    scene('LunD', () => {
        add([
        sprite('LunD',{
            width : width(),
            height : height()
        })
    ]);
    })
}