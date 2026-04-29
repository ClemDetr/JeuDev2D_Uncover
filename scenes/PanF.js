
export{
    init
}

function init() {
    loadSprite('PanF',"./assets/218-panF.JPG")
    scene('panF', () => {
        add([
        sprite('PanF',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to217 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to217.onHover(() => setCursor("pointer"))
    to217.onHoverEnd(() => setCursor("default"))
    to217.onClick(() => (go('217')));
    })
}