import { invtry, cursor } from "../main.js"

export{
    init,
}

function init() {
    loadSprite('EM',"assets/253-EM.jpg")
    loadSprite('titre',"assets/titre.png")
    
    scene('menu', () => {
        const menu = add([
            sprite('EM',{
                width : width(),
                height : height()
            }),
            area()
        ]);
        menu.add([
            rect(width()*0.7, height()*0.3+20, {
                fill : true
            }),
            color(192,173,80),
            anchor("center"),
            pos(width()*0.5,height()*0.5-10)
        ])
        menu.add([
            text("En déplaçant la souris, tu peux naviguer vers d'autres endroits. Il te suffit de cliquer lorsque la souris se transforme en main. Clique n'importe où pour commencer puis essaie d'entrer dans le musée !",{
                size : height()*0.05,
                width : width()*0.65,
                align : "center",
            }),
            color(0,0,0),
            anchor("center"),
            pos(width()*0.5,height()*0.5)
        ])
        menu.add([
            sprite("titre"),
            scale(0.5),
            pos(width()*0.5,height()*0.15),
            anchor("center")
        ])
        cursor()

        menu.onClick(() =>{
            go('EM')
        });

    
    });
}