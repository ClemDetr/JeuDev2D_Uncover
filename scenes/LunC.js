
export{
    init
}

function init() {
    loadSprite('lunC',"./assets/241-lunC.JPG")
    scene('lunC', () =>{
    add([
        sprite('lunC',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to248 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to248.onHover(() => setCursor("pointer"))
    to248.onHoverEnd(() => setCursor("default"))
    to248.onClick(() => (go('248')));
});
}