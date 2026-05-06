import { invtry, cursor, startDialogue } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past1',"./assets/Past1.png")
    loadSprite('npc1',"./assets/Passant.png")
    
    scene('past1', () => {
        add([
            
        sprite('past1',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast0 = add([
            rect(width()*0.1,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.95,height()*0.5),
            area()
        ]);

        toPast0.onHover(() => invtry.cursor_pointer = true)
        toPast0.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast0.onClick(() => (go('past0')));

        const toPast3 = add([
            rect(width()*0.1,height()*0.8,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.05,height()*0.5),
            area()
        ]);

        toPast3.onHover(() => invtry.cursor_pointer = true)
        toPast3.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast3.onClick(() => (go('past3')));

        const toPast4 = add([
            rect(width()*0.7,height()*0.1,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.95),
            area()
        ]);

        toPast4.onHover(() => invtry.cursor_pointer = true)
        toPast4.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast4.onClick(() => (go('past4')));

  
        const dialogueData = {
            start: {
                text: "Bonjour, voyageur ! Que puis-je faire pour vous ?",
                choices: [
                    { text: "Je cherche quelqu'un.", next: "suspect" },
                    { text: "Non merci, je ne fais que passer.", next: "leave" }
                ]
            },

            suspect: {
                text: "Oui ? À quoi ressemble-t-il ?",
                choices: [
                    { text: "Il est grand et maigre.", next: "grand" },
                    { text: "Il a les cheveux blonds.", next: "blond" }
                    
                ]
            },

            grand: {
                text: "Vous vous rendez compte à quel point cela ne réduit pas les possibilités ?",
                choices: [
                    { text: "Il est blond et a des habits étranges", next: "blond" }
                ]
            },

            blond: {
                text: "Blond ?! C'est rare ça ! J'en ai vu un comme ça il n'y a pas si longtemps, vous venez de le rater !",
                choices: [
                    { text: "Je vais essayer de le retrouver.", next: "bye" }
                ]
            },


            bye: {
                text: "J'espère que vous trouverez la personne que vous cherchez !",
                choices: [
                    { text: "Merci.", next: "end" }
                ]
            },

            leave: {
                text: "Bonne journée !",
                choices: [
                    { text: "Au revoir.", next: "end" }
                ]
            },

            end: null
        }

        const npc = add([
            sprite("npc1"),
            scale(0.2),
            anchor("center"),
            pos(width() * 0.616, height() * 0.65),
            area()
        ])
        onClick(() => {console.log(mousePos(), width(), height())})
        npc.onHover(() => invtry.cursor_pointer = true)
        npc.onHoverEnd(() => invtry.cursor_pointer = false)
        npc.onClick(() => {
            startDialogue(dialogueData)
        })

    })
}