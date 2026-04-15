
export{
    init
}

function init() {
    loadSprite('222',"./assets/222.JPG")
    scene('222', () => {
        add([
        sprite('222',{
            width : width(),
            height : height()
        })
    ]);
    })

}