
export{
    init,
}

function init() {
    loadSprite('RP',"./assets/252-RP.JPG")
    scene('RP', () => {
    add([
        sprite('RP',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")


    const toEM = add([
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.05,height()*0.45),
        area()
    ]);


    const toOF = add([
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.9,height()*0.5),
        area()
    ]);


    

    toEM.onHover(() => setCursor("pointer"))
    toEM.onHoverEnd(() => setCursor("default"))
    toEM.onClick(() => (go('EM')));

    toOF.onHover(() => setCursor("pointer"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() => (go('OF')));
});
}