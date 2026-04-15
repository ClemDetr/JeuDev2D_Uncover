import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
//import { base } from "./scenes/scene1";
kaplay({
    width : innerWidth,
    height : innerHeight
});


//Sprites Loads
loadSprite('OF',"./assets/249-OF.JPG")
loadSprite('EM',"./assets/253-EM.JPG")
loadSprite('Mus1',"./assets/254-Mus1.JPG")
loadSprite('RP',"./assets/252-RP.JPG")
loadSprite('panA',"./assets/250-panA.JPG")
loadSprite('lunA',"./assets/251-lunA.JPG")
loadSprite('248',"./assets/248.JPG")
loadSprite('panB',"./assets/246-panB.JPG")
loadSprite('lunB',"./assets/247-lunB.JPG")

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
        rect(width()/10,height()/2,{
            fill : false
        }),
        anchor("center"),
        pos(0,height()/2),
        area()
    ]);

    const toMus1 = add([
        rect(width()*0.14,height()*0.37,{
            fill : false
        }),
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
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.05,height()*0.45),
        area()
    ]);


    const toOF = add([
        rect(width()*0.2,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.9,height()*0.5),
        area()
    ]);


    

    toEM.onHover(() => setCursor("crosshair"))
    toEM.onHoverEnd(() => setCursor("default"))
    toEM.onClick(() => (go('EM')));

    toOF.onHover(() => setCursor("crosshair"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() => (go('OF')));
});

scene('OF', () => {
    add([
        sprite('OF',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toRP = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    const to248 = add([
        rect(width()*0.3,height()*0.2,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.6,height()*0.55),
        area()
    ]);

    const toPanA = add([
        rect(width()*0.09,height()*0.2,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.2,height()*0.65),
        area()
    ]);

    const toLunA = add([
        rect(width()*0.09,height()*0.4,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.3,height()*0.65),
        area()
    ]);

    toRP.onHover(() => setCursor("crosshair"))
    toRP.onHoverEnd(() => setCursor("default"))
    toRP.onClick(() =>(go('RP')));

    to248.onHover(() => setCursor("crosshair"))
    to248.onHoverEnd(() => setCursor("default"))
    to248.onClick(() => (go('248')));

    toPanA.onHover(() => setCursor("crosshair"))
    toPanA.onHoverEnd(() => setCursor("default"))
    toPanA.onClick(() =>(go('panA')));

    toLunA.onHover(() => setCursor("crosshair"))
    toLunA.onHoverEnd(() => setCursor("default"))
    toLunA.onClick(() =>(go('lunA')));
});

scene('panA', () =>{
    add([
        sprite('panA',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toOF = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    toOF.onHover(() => setCursor("crosshair"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() => (go('OF')));
});

scene('lunA', () =>{
    add([
        sprite('lunA',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toOF = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    toOF.onHover(() => setCursor("crosshair"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() => (go('OF')));
});


scene('248', () => {
    add([
        sprite('248',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const toOF = add([
        rect(width()*0.8,height()*0.2,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    const toPanB = add([
        rect(width()*0.02,height()*0.05,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.628,height()*0.558),
        area()
    ]);

    const toLunB = add([
        rect(width()*0.016,height()*0.06,{
            fill : true
        }),
        anchor("center"),
        pos(width()*0.597,height()*0.547),
        area()
    ]);

    onClick(() =>(console.log(width(),height(),mousePos())))
    toOF.onHover(() => setCursor("crosshair"))
    toOF.onHoverEnd(() => setCursor("default"))
    toOF.onClick(() =>(go('OF')));

    toPanB.onHover(() => setCursor("crosshair"))
    toPanB.onHoverEnd(() => setCursor("default"))
    toPanB.onClick(() =>(go('panB')));

    toLunB.onHover(() => setCursor("crosshair"))
    toLunB.onHoverEnd(() => setCursor("default"))
    toLunB.onClick(() =>(go('lunB')));
});

scene('panB', () =>{
    add([
        sprite('panB',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to248 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to248.onHover(() => setCursor("crosshair"))
    to248.onHoverEnd(() => setCursor("default"))
    to248.onClick(() => (go('248')));
});

scene('lunB', () =>{
    add([
        sprite('lunB',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const to248 = add([
        rect(width()*0.8,height()*0.3,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.8),
        area()
    ]);

    to248.onHover(() => setCursor("crosshair"))
    to248.onHoverEnd(() => setCursor("default"))
    to248.onClick(() => (go('248')));
});

go('248');