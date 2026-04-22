
export{
    init
}

function init() {
    loadSprite('236',"./assets/236.JPG")
    scene('236', () => {
        add([
            sprite('236',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to235 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width(),height()*0.5),
            area()
        ]);
        
        to235.onHover(() => setCursor("crosshair"))
        to235.onHoverEnd(() => setCursor("default"))
        to235.onClick(() => (go('235')));

        const to230 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to230.onHover(() => setCursor("crosshair"))
        to230.onHoverEnd(() => setCursor("default"))
        to230.onClick(() =>(go('230')));
    })
}