
export{
    init
}

function init() {
    loadSprite('LunE',"./assets/233-lunE.JPG")
    scene('LunE', () => {
        add([
        sprite('LunE',{
            width : width(),
            height : height()
        })
    ]);
    })
}