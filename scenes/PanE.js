
export{
    init
}

function init() {
    loadSprite('PanE',"./assets/232-panE.JPG")
    scene('PanE', () => {
        add([
        sprite('PanE',{
            width : width(),
            height : height()
        })
    ]);
    })
}