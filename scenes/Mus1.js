
export{
    init,
}

function init() {
    loadSprite('Mus1',"./assets/254-Mus1.JPG")
    loadSprite('letter',"./assets/star.png")
    loadSprite('letter2',"./assets/star.png")
    loadSprite('collec',"./assets/profilpicturecollect.png")
    scene('Mus1', () => {
    add([
        sprite('Mus1',{
            width : width(),
            height : height()
        })
    ]);
    setCursor("default")

    const letter = add([
        sprite("letter"),
        area()
    ])

    letter.onHover(() => setCursor("pointer"))
    letter.onHoverEnd(() => setCursor("default"))
    letter.onClick(() =>{
        sprite("letter2"),
        letter.add([
            text("Vous êtes charger de retrouver la place d'un vieux collectionneur, il a été vu pour la dernière fois dans les ruines romaines. Voici sa photo :",{
                width : width()*0.8,
                size : 15
            }),
            pos(5,10)
        ])
        letter.add([
            sprite("collec"),
            scale(0.3),
            pos(50,0)
        ])
    });

    const toEM = add([
        rect(width()*0.8,height()*0.2,{
            fill : false
        }),
        anchor("center"),
        pos(width()*0.5,height()*0.9),
        area()
    ]);

    
    toEM.onHover(() => setCursor("pointer"))
    toEM.onHoverEnd(() => setCursor("default"))
    toEM.onClick(() =>(go('EM')));

});
}