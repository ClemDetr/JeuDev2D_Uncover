
export{
    init
}

function init() {
    loadSprite('223',"./assets/223.JPG")
    scene('223', () => {
        add([
        sprite('223',{
            width : width(),
            height : height()
        })
        ]);
        setCursor("default")
    
        const to222 = add([
            rect(width()*0.9,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to222.onHover(() => setCursor("crosshair"))
        to222.onHoverEnd(() => setCursor("default"))
        to222.onClick(() =>(go('222')));

        const to224 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);

        to224.onHover(() => setCursor("crosshair"))
        to224.onHoverEnd(() => setCursor("default"))
        to224.onClick(() => (go('224')));
    })
}