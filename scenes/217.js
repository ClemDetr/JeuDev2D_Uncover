
export{
    init
}

function init() {
    loadSprite('217',"./assets/217.JPG")
    scene('217', () => {
        add([
            sprite('217',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")


        const to220 = add([
            rect(width()*0.2,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.2,height()*0.45),
            area()
        ]);

        to220.onHover(() => setCursor("pointer"))
        to220.onHoverEnd(() => setCursor("default"))
        to220.onClick(() => (go('220')));

        const to219 = add([
            rect(width()*0.15,height()*0.92,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);
        
        to219.onHover(() => setCursor("pointer"))
        to219.onHoverEnd(() => setCursor("default"))
        to219.onClick(() => (go('219')));


        const toPanF = add([
            rect(width()*0.17,height()*0.4,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.72,height()*0.4),
            area()
        ]);

        toPanF.onHover(() => setCursor("pointer"))
        toPanF.onHoverEnd(() => setCursor("default"))
        toPanF.onClick(() =>(go('PanF')));
    })
}