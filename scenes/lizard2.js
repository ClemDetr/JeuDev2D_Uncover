
export{
    init
}

function init() {
    loadSprite('lizard2',"./assets/lizard2.JPG")
    scene('lizard2', () => {
        add([
            sprite('lizard2',{
                width : width(),
                height : height()
            })
        ]);
        setCursor("default")

        const to242 = add([
            rect(width(),height()*0.5,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.75),
            area()
        ]);

        to242.onHover(() => setCursor("pointer"))
        to242.onHoverEnd(() => setCursor("default"))
        to242.onClick(() =>(go('242')));
    })
}