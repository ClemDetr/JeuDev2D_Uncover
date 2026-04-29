
export{
    init
}

function init() {
    loadSprite('220',"./assets/220.JPG")
    scene('220', () => {
        add([
            sprite('220',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to221 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);
        
        to221.onHover(() => setCursor("pointer"))
        to221.onHoverEnd(() => setCursor("default"))
        to221.onClick(() => (go('221')));

        const to217 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to217.onHover(() => setCursor("pointer"))
        to217.onHoverEnd(() => setCursor("default"))
        to217.onClick(() =>(go('217')));
    })
}