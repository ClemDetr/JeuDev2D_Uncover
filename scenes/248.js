
export{
    init
}

function init() {
    loadSprite('248',"./assets/248.JPG")
    scene('248', () => {
    add([
        sprite('248',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toOF = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    const to242 = add([
        rect(width()*0.3,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.55),
        area()
    ]);

    const toPanC = add([
        rect(width()*0.02,height()*0.05,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.628,height()*0.558),
        area()
    ]);

    const toLunC = add([
        rect(width()*0.016,height()*0.06,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.599,height()*0.547),
        area()
    ]);

    
    toOF.onHover(() => setCursor("crosshair"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() =>(go('OF')));

    to242.onHover(() => setCursor("crosshair"))
    to242.onHoverEnd(() => setCursor("default"))
    to242.onClick(() =>(go('242')));

    toPanC.onHover(() => setCursor("crosshair"))
    toPanC.onHoverEnd(() => setCursor("default"))
    toPanC.onClick(() =>(go('panC')));

    toLunC.onHover(() => setCursor("crosshair"))
    toLunC.onHoverEnd(() => setCursor("default"))
    toLunC.onClick(() =>(go('lunC')));
});
}