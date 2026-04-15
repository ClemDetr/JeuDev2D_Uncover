
export{
    init
}

function init() {
    loadSprite('224',"./assets/224.JPG")
    scene('224', () => {
        add([
        sprite('224',{
            width : width(),
            height : height()
        })
    ]);
    })
}