
export{
    init
}

function init() {
    loadSprite('217',"./assets/217.JPG")
    scene('217', () => {
        add([
        sprite('217',{
            width : width(),
            height : height()
        })
    ]);
    })
}