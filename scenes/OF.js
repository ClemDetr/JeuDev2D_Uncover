
export{
    init
}

function init() {
    loadSprite('OF',"./assets/249-OF.JPG")
    scene('OF', () => {
    add([
        sprite('OF',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toRP = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    const to248 = add([
        rect(width()*0.3,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.6,height()*0.55),
        area()
    ]);

    const toPanA = add([
        rect(width()*0.09,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.65),
        area()
    ]);

    const toLunA = add([
        rect(width()*0.09,height()*0.4,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.3,height()*0.65),
        area()
    ]);

    toRP.onHover(() => setCursor("pointer"))
    toRP.onHoverEnd(() => setCursor("default"))
    toRP.onClick(() =>(go('RP')));

    to248.onHover(() => setCursor("pointer"))
    to248.onHoverEnd(() => setCursor("default"))
    to248.onClick(() => (go('248')));

    toPanA.onHover(() => setCursor("pointer"))
    toPanA.onHoverEnd(() => setCursor("default"))
    toPanA.onClick(() =>(go('panA')));

    toLunA.onHover(() => setCursor("pointer"))
    toLunA.onHoverEnd(() => setCursor("default"))
    toLunA.onClick(() =>(go('lunA')));
});
}