import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
//import { base } from "./scenes/scene1";
kaplay({
    width : innerWidth,
    height : innerHeight
});


//Sprites Loads
loadSprite('OF',"./assets/249-OF.JPG")
loadSprite('arrow',"./assets/arrow.png")
loadSprite('parrot',"./assets/parrot.png")
loadSprite('chest',"./assets/chest.png")
loadSprite('openChest',"./assets/chestOpen.png")
loadSprite('star',"./assets/star.png")
loadSprite('EM',"./assets/253-EM.JPG")
loadSprite('Mus1',"./assets/254-Mus1.JPG")
loadSprite('RP',"./assets/252-RP.JPG")

setBackground(BLACK)


scene('EM', () => {
    add([
        sprite('EM',{
            width : width(),
            height : height()
        }),
    ]);
    setCursor("default")

    const toRP = add([
        rect(width()/10,height()/2),
        anchor("center"),
        pos(0,height()/2),
        color(0,100,0),
        area()
    ]);

    const toMus1 = add([
        rect(150,250),
        color(0,100,0),
        anchor("center"),
        pos(width()*0.66,height()*0.69),
        area()
    ]);

    
    toMus1.onHover(() => setCursor("crosshair"))
    toMus1.onHoverEnd(() => setCursor("default"))
    toMus1.onClick(() => (go('Mus1')));

    toRP.onHover(() => setCursor("crosshair"))
    toRP.onHoverEnd(() => setCursor("default"))
    toRP.onClick(() => (go('RP')));
});

scene('Mus1', () => {
    add([
        sprite('Mus1',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    

    const toEM = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    
    //onUpdate(() => setCursor("default"))
    toEM.onHover(() => setCursor("crosshair"))
    toEM.onHoverEnd(() => setCursor("default"))
    toEM.onClick(() =>(go('EM')));

});

scene('RP', () => {
    add([
        sprite('RP',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")


    const toEM = add([
        rect(width()*0.2,height()*0.2),
        anchor("center"),
        pos(width()*0.05,height()*0.45),
        area()
    ]);

    onClick(() =>(console.log(width(),height(),mousePos())))
    
    toEM.onHover(() => setCursor("crosshair"))
    toEM.onHoverEnd(() => setCursor("default"))
    toEM.onClick(() => (go('EM')));
});

go('RP');