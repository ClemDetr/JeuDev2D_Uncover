
export{
    init
}

function init() {
    loadSprite('244',"./assets/244.JPG")
    scene('244', () => {
    add([
        sprite('244',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to242 = add([
        rect(width()*0.2,height()*0.2,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.5),
        area()
    ]);

    

    const to225 = add([
        rect(width()*0.8,height()*0.2,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    onClick(() =>(console.log(width(),height(),mousePos())))
    

    to242.onHover(() => setCursor("crosshair"))
    to242.onHoverEnd(() => setCursor("default"))
    to242.onClick(() =>(go('242')));

    to225.onHover(() => setCursor("crosshair"))
    to225.onHoverEnd(() => setCursor("default"))
    to225.onClick(() =>(go('225')));
    
});
}