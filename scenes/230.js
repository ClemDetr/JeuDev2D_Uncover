
export{
    init
}

function init() {
    loadSprite('230',"./assets/230.JPG")
    scene('230', () => {
        add([
            sprite('230',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to231 = add([
            rect(width()*0.7,height()*0.2,{
            fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()),
            area()
        ]);

        to231.onHover(() => setCursor("crosshair"))
        to231.onHoverEnd(() => setCursor("default"))
        to231.onClick(() =>(go('231')));

        const tolizard = add([
            rect(width()*0.09,height()*0.2,{
                fill : true
            }),
            anchor("center"),
            pos(width()*0.3,height()*0.744),
            area()
        ]);

        tolizard.onHover(() => setCursor("crosshair"))
        tolizard.onHoverEnd(() => setCursor("default"))
        tolizard.onClick(() =>(go('lizard')));

        const to236 = add([
            rect(width()*0.2,height()*0.9,{
                fill : false
            }),
            anchor("center"),
            pos(width(),height()*0.5),
            area()
        ]);
        
        to236.onHover(() => setCursor("crosshair"))
        to236.onHoverEnd(() => setCursor("default"))
        to236.onClick(() => (go('236')));
    })
}