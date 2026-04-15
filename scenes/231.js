
export{
    init
}

function init() {
    loadSprite('231',"./assets/231.JPG")
    scene('231', () => {
        add([
        sprite('231',{
            width : width(),
            height : height()
        })
    ]);
    })
}