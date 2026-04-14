import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
//import { base } from "./scenes/scene1";
kaplay();


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

let GOTSPECIALITEM = false;

scene('EM', () => {
    add([
        sprite('EM'),
        scale(0.3)
    ]);

    const toRP = add([
        rect(80,300),
        pos(0,height()/2),
        color(0,100,0),
        area()
    ]);

    const toMus1 = add([
        rect(150,250),
        color(0,100,0),
        pos(850,400),
        area()
    ]);

    
    //toMus1.onHoverUpdate(() => )
    toMus1.onClick(() => (go('Mus1')));
    toRP.onClick(() => (go('RP')));
});

scene('Mus1', () => {
    add([
        sprite('Mus1'),
        scale(0.3)
    ]);


    

    const arrow = add([
        rect(800,80),
        color(0,100,0),
        pos(100,700),
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

    leftArrow.onClick(() => (go('EM')));
});

go('EM');