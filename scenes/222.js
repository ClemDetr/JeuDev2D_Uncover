
export{
    init
}

function init() {
    loadSprite('222',"./assets/222.JPG")
    scene('222', () => {
        add([
            sprite('222',{
                width : width(),
                height : height()
            })
     
        ]);
        setCursor("default")

        const to223 = add([
            rect(width()*0.9,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        to223.onHover(() => setCursor("pointer"))
        to223.onHoverEnd(() => setCursor("default"))
        to223.onClick(() =>(go('223')));

        const to221 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.3,height()*0.5),
            area()
        ]);

        to221.onHover(() => setCursor("pointer"))
        to221.onHoverEnd(() => setCursor("default"))
        to221.onClick(() => (go('221')));
    })

}