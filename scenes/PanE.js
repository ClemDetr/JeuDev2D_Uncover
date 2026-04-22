
export{
    init
}

function init() {
    loadSprite('PanE',"./assets/232-panE.JPG")
    scene('panE', () => {
        add([
        sprite('PanE',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to231 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to231.onHover(() => setCursor("crosshair"))
    to231.onHoverEnd(() => setCursor("default"))
    to231.onClick(() => (go('231')));
    })
}