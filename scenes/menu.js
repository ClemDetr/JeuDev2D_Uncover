
export{
    init,
}

function init() {
    loadSprite('EM',"./assets/253-EM.JPG")
    scene('menu', () => {
        const menu = add([
            sprite('EM',{
                width : width(),
                height : height()
            }),
            area()
        ]);
        menu.add([
            text("Clique n'importe où pour commencer !"),
            anchor("center"),
            pos(width()*0.5,height()*0.5)
        ])
        menu.add([
            text("les zones cliquables change ton curseur en croix !"),
            anchor("center"),
            pos(width()*0.6,height()*0.5)
        ])
        setCursor("crosshair")

        menu.onClick(() =>(go('EM')));

    
    });
}