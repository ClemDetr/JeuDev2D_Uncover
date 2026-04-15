
export{
    init
}

function init() {
    loadSprite('228',"./assets/228.JPG")
    scene('228', () => {
        add([
        sprite('228',{
            width : width(),
            height : height()
        })
    ]);
    })
}