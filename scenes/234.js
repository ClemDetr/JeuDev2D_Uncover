
export{
    init
}

function init() {
    loadSprite('234',"./assets/234.JPG")
    scene('234', () => {
        add([
            sprite('234',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to227 = add([
            rect(width()*0.3,height()*0.25,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.1,height()*0.9),
            area()
        ]);

        to227.onHover(() => setCursor("crosshair"))
        to227.onHoverEnd(() => setCursor("default"))
        to227.onClick(() =>(go('227')));


        const to231 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.2,height()*0.5),
            area()
        ]);

        to231.onHover(() => setCursor("crosshair"))
        to231.onHoverEnd(() => setCursor("default"))
        to231.onClick(() =>(go('231')));

        const to235 = add([
            rect(width()*0.3,height()*0.5,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.8),
            area()
        ]);
        
        to235.onHover(() => setCursor("crosshair"))
        to235.onHoverEnd(() => setCursor("default"))
        to235.onClick(() => (go('235')));
    })
}