
export{
    init
}

function init() {
    loadSprite('231',"./assets/231.JPG")
    scene('231', () => {
        add([
            sprite('231',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to228 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to228.onHover(() => setCursor("crosshair"))
        to228.onHoverEnd(() => setCursor("default"))
        to228.onClick(() =>(go('228')));


        const to230 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(0,height()*0.5),
            area()
        ]);

        to230.onHover(() => setCursor("crosshair"))
        to230.onHoverEnd(() => setCursor("default"))
        to230.onClick(() =>(go('230')));

        const to234 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width(),height()*0.5),
            area()
        ]);
        
        to234.onHover(() => setCursor("crosshair"))
        to234.onHoverEnd(() => setCursor("default"))
        to234.onClick(() => (go('234')));


        const toPanE = add([
            rect(width()*0.09,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.825,height()*0.744),
            area()
        ]);
        
        toPanE.onHover(() => setCursor("crosshair"))
        toPanE.onHoverEnd(() => setCursor("default"))
        toPanE.onClick(() =>(go('panE')));

        const toLunE = add([
            rect(width()*0.07,height()*0.35,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.7,height()*0.7),
            area()
        ]);

        toLunE.onHover(() => setCursor("crosshair"))
        toLunE.onHoverEnd(() => setCursor("default"))
        toLunE.onClick(() =>(go('lunE')));
    })
}