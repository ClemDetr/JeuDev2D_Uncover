
export{
    init
}

function init() {
    loadSprite('242',"./assets/242.JPG")
    scene('242', () => {
    add([
        sprite('242',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to248 = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    to248.onHover(() => setCursor("crosshair"))
    to248.onHoverEnd(() => setCursor("default"))
    to248.onClick(() =>(go('248')));

    const to244 = add([
        rect(width()*0.2,height()*0.1,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.7,height()*0.558),
        area()
    ]);

    to244.onHover(() => setCursor("crosshair"))
    to244.onHoverEnd(() => setCursor("default"))
    to244.onClick(() =>(go('244')));

    const toLizard = add([
        rect(width()*0.06,height()*0.06,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.547),
        area()
    ]);

    toLizard.onHover(() => setCursor("crosshair"))
    toLizard.onHoverEnd(() => setCursor("default"))
    toLizard.onClick(() =>(go('lizard2')));

    
    
});
}
