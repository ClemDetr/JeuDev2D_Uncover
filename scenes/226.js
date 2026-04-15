
export{
    init
}

function init() {
    loadSprite('226',"./assets/226.JPG")
    scene('226', () => {
        add([
            sprite('226',{
                width : width(),
                height : height()
            })
        ]);

        const to225 = add([
            rect(width()*0.8,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to225.onHover(() => setCursor("crosshair"))
        to225.onHoverEnd(() => setCursor("default"))
        to225.onClick(() =>(go('225')));
    })
}