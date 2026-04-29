
export{
    init,
}

function init() {
    loadSprite('EM',"./assets/253-EM.JPG")
    scene('EM', () => {
    add([
        sprite('EM',{
            width : width(),
            height : height()
        }),
    ]);
    setCursor("default")

    const toRP = add([
        rect(width()/10,height()/2,{
            fill : false
        }),
        anchor("center"),
        pos(0,height()/2),
        area()
    ]);

    const toMus1 = add([
        rect(width()*0.14,height()*0.37,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.66,height()*0.69),
        area()
    ]);

    
    toMus1.onHover(() => setCursor("pointer"))
    toMus1.onHoverEnd(() => setCursor("default"))
    toMus1.onClick(() => (go('Mus1')));

    toRP.onHover(() => setCursor("pointer"))
    toRP.onHoverEnd(() => setCursor("default"))
    toRP.onClick(() => (go('RP')));
});
}