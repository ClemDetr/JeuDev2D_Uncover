
export{
    init
}

function init() {
    loadSprite('235',"./assets/235.JPG")
    scene('235', () => {
        add([
            sprite('235',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to234 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to234.onHover(() => setCursor("crosshair"))
        to234.onHoverEnd(() => setCursor("default"))
        to234.onClick(() =>(go('234')));

        const to239 = add([
                rect(width()*0.3,height()*0.2,{
                    fill : false
                }),
                anchor("center"),
                pos(width()*0.7,height()*0.558),
                area()
            ]);

        to239.onHover(() => setCursor("crosshair"))
        to239.onHoverEnd(() => setCursor("default"))
        to239.onClick(() =>(go('239')));
    })
}