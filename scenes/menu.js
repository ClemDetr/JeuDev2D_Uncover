
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
            text("Clique n'importe où pour commencer !",{
                size : height()*0.07,
                width : width()*0.7
            }),
            anchor("center"),
            pos(width()*0.7,height()*0.3)
        ])
        setCursor("pointer")

        menu.onClick(() =>(go('EM')));

    
    });
}