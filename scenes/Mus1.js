import { invtry, cursor } from "../main.js"

export{
    init,
}

function init() {
    loadSprite('Mus1',"./assets/254-Mus1.JPG")
    loadSprite('letter',"./assets/letter.png")
    loadSprite('letter2',"./assets/letter2.png")
    loadSprite('collec',"./assets/profilpicturecollect.png")
    scene('Mus1', () => {
    add([
        sprite('Mus1',{
            width : width(),
            height : height()
        })
    ]);
    cursor()

    const letter = add([
        sprite("letter"),
        area()
    ])

    letter.onHover(() => invtry.cursor_pointer = true)
    letter.onHoverEnd(() => invtry.cursor_pointer = false)
    letter.onClick(() =>{
        letter.sprite = "letter2",
        letter.add([
            sprite("collec"),
            scale(0.2),
            pos(350,0)
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

    
    toEM.onHover(() => invtry.cursor_pointer = true)
    toEM.onHoverEnd(() => invtry.cursor_pointer = false)
    toEM.onClick(() =>(go('EM')));

});
}