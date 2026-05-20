import { invtry, cursor } from "../main.js"

export{
    init
}

function init() {
    loadSprite('cd2',"assets/CD2.png")
    loadSprite('femme',"assets/femmeromaine.png")
    
    scene('cd2', () => {
        add([
            
        sprite('cd2',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()


        const toCD1 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.9,height()*0.45),
            area()
        ]);

        toCD1.onHover(() => invtry.cursor_pointer = true)
        toCD1.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD1.onClick(() => (go('cd1')));

        const toDomus = add([
            rect(width()*0.2,height()*0.5,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.41,height()*0.54),
            area()
        ]);

        toDomus.onHover(() => invtry.cursor_pointer = true)
        toDomus.onHoverEnd(() => invtry.cursor_pointer = false)

        if (invtry.key_domus) {
            
            toDomus.onClick(() =>(
                go('domus')
            ));
        }else{
            var femme
            toDomus.onClick(() =>{
                femme = add([
                    sprite('femme'),
                    scale(0.6),
                    anchor("center"),
                    pos(width()*0.3,height()*0.65)
                ]),
                femme.add([
                    rect(width()*0.7,height()*0.5,{
                        fill : true
                    }),
                    color(192,173,80),
                    anchor("center"),
                    pos(width()*0.5,height()*0.1),
                    z(9)
                ]),
                femme.add([
                    text("Tu peux bien essayer d'entrer dans la demeure mais la porte est fermée à clé. Il devrait y en avoir une quelque part dans l'entrepôt.", {
                        width : width()*0.68,
                        size : height()*0.07,
                        z : 10
                    }),
                    color(0,0,0),
                    pos(width()*0.5,height()*0.1),
                    anchor("center"),
                    z(10)
                ]),
                wait(5, () =>{
                    femme.destroy()
                })
                
            });
        }
    })
}