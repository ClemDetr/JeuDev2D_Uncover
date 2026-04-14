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

    
    //toMus1.onHoverUpdate(() => )
    toMus1.onClick(() => (go('Mus1')));
    toRP.onClick(() => (go('RP')));
});

scene('Mus1', () => {
    add([
        sprite('Mus1',{
            width : width(),
            height : height()
        })
    ]);


    

    const arrow = add([
        rect(800,150),
        color(0,100,0),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    
    
    arrow.onClick(() =>(go('EM')));

});

scene('RP', () => {
    add([
        sprite('RP'),
        scale(0.3)
    ]);

    const leftArrow = add([
        sprite('arrow',{
            flipX: true
        }),
        pos(30,300),
        area()
    ]);

    onClick(() =>(console.log(width(),height(),mousePos())))
    leftArrow.onClick(() => (go('EM')));
});

go('Mus1');