
export{
    init
}

function init() {
    loadSprite('panA',"./assets/250-panA.JPG")
    scene('panA', () =>{
    add([
        sprite('panA',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toOF = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    toOF.onHover(() => setCursor("crosshair"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() => (go('OF')));
});
}