
export{
    init
}

function init() {
    loadSprite('225',"./assets/225.JPG")
    scene('225', () => {
        add([
        sprite('225',{
            width : width(),
            height : height()
        })
    ]);
    })
}