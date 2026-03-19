import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
export {
    leftbase,
}

kaplay();


"Sprites load"
loadSprite('bg-base',"./assets/battleback10.png")
loadSprite('arrow',"./assets/arrow.png")
loadSprite('parrot',"./assets/parrot.png")
loadSprite('chest',"./assets/chest.png")
loadSprite('openChest',"./assets/chestOpen.png")
loadSprite('star',"./assets/star.png")

setBackground(BLACK)

scene('leftbase', () => {
    add([
        sprite('bg-base', {
            flipX:true
        })
    ]);


    const parrot = add([
        sprite('parrot'),
        scale(4),
        pos(500,300),
        anchor('center'),
        area()
    ])

    const rightArrow = add([
        sprite('arrow'),
        pos(950,300),
        area()
    ]);

    
    const chest = add([
        sprite('chest'),
        pos(20,300),
        area()
    ]);


    rightArrow.onClick(() =>(go('base')));

    parrot.onClick(() => {
        const backtext = add([
            rect(1000,100),
            pos(0,500),
            color(255,255,255)
        ])
        const message = add([
            text('Parrot : You found me !'),
            color(0,0,0),
            pos(0, 550),
        ]);

        wait(2, () => {
            message.destroy()
            backtext.destroy()
        });
    })

    chest.onClick(() => {
        chest.sprite = 'openChest',
        GOTSPECIALITEM = 1;
        const specialItem = add([
            sprite('star'),
            pos(0,0)
        ])
    });
});