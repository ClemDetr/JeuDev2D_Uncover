
export{
    init
}

function init() {
    loadSprite('239',"./assets/239.JPG")
    scene('239', () => {
        add([
            sprite('239',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to248 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to248.onHover(() => setCursor("crosshair"))
        to248.onHoverEnd(() => setCursor("default"))
        to248.onClick(() =>(go('248')));

        const to235 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.2,height()*0.5),
            area()
        ]);

        to235.onHover(() => setCursor("crosshair"))
        to235.onHoverEnd(() => setCursor("default"))
        to235.onClick(() =>(go('235')));

        const toPanD = add([
            rect(width()*0.06,height()*0.1,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.868,height()*0.635),
            area()
        ]);
        
        toPanD.onHover(() => setCursor("crosshair"))
        toPanD.onHoverEnd(() => setCursor("default"))
        toPanD.onClick(() =>(go('panD')));

        const toLunD = add([
            rect(width()*0.04,height()*0.15,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.92,height()*0.6),
            area()
        ]);

        onClick(() => console.log(width(),height(),mousePos()))

        toLunD.onHover(() => setCursor("crosshair"))
        toLunD.onHoverEnd(() => setCursor("default"))
        toLunD.onClick(() =>(go('lunD')));

    })
}