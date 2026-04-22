
export{
    init
}

function init() {
    loadSprite('224',"./assets/224.JPG")
    scene('224', () => {
        add([
        sprite('224',{
            width : width(),
            height : height()
        })
        ]);
        setCursor("default")


        const to225 = add([
            rect(width()*0.3,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to225.onHover(() => setCursor("crosshair"))
        to225.onHoverEnd(() => setCursor("default"))
        to225.onClick(() =>(go('225')));

        const to223 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to223.onHover(() => setCursor("crosshair"))
        to223.onHoverEnd(() => setCursor("default"))
        to223.onClick(() =>(go('223')));
    })
}