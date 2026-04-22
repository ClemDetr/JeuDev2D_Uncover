
export{
    init
}

function init() {
    loadSprite('221',"./assets/221.JPG")
    scene('221', () => {
        add([
            sprite('221',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to222 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.5),
            area()
        ]);
        

        to222.onHover(() => setCursor("crosshair"))
        to222.onHoverEnd(() => setCursor("default"))
        to222.onClick(() => (go('222')));

        const to228 = add([
            rect(width()*0.2,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.5),
            area()
        ]);

        to228.onHover(() => setCursor("crosshair"))
        to228.onHoverEnd(() => setCursor("default"))
        to228.onClick(() =>(go('228')));

        const to220 = add([
            rect(width()*0.8,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to220.onHover(() => setCursor("crosshair"))
        to220.onHoverEnd(() => setCursor("default"))
        to220.onClick(() =>(go('220')));
    })
}