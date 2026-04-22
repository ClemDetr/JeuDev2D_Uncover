
export{
    init
}

function init() {
    loadSprite('227',"./assets/227.JPG")
    scene('227', () => {
        add([
            sprite('227',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to226 = add([
            rect(width()*0.9,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to226.onHover(() => setCursor("crosshair"))
        to226.onHoverEnd(() => setCursor("default"))
        to226.onClick(() =>(go('226')));

        const to234 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to234.onHover(() => setCursor("crosshair"))
        to234.onHoverEnd(() => setCursor("default"))
        to234.onClick(() => (go('234')));
    })
}