
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
        setCursor("default")

        const to226 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to226.onHover(() => setCursor("crosshair"))
        to226.onHoverEnd(() => setCursor("default"))
        to226.onClick(() =>(go('226')));

        const to244 = add([
            rect(width()*0.3,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.6),
            area()
        ]);

        to244.onHover(() => setCursor("crosshair"))
        to244.onHoverEnd(() => setCursor("default"))
        to244.onClick(() =>(go('244')));

        const to224 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to224.onHover(() => setCursor("crosshair"))
        to224.onHoverEnd(() => setCursor("default"))
        to224.onClick(() =>(go('224')));
    })
}