
export{
    init,
}

function init() {
    loadSprite('Mus1',"./assets/254-Mus1.JPG")
    scene('Mus1', () => {
    add([
        sprite('Mus1',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    

    const toEM = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    
    toEM.onHover(() => setCursor("crosshair"))
    toEM.onHoverEnd(() => setCursor("default"))
    toEM.onClick(() =>(go('EM')));

});
}