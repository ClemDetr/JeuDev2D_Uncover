import { invtry, cursor, startDialogue } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past3',"./assets/Past3.png")
    loadSprite('npc',"./assets/Marchand.png")
    
    scene('past3', () => {
        add([
            
        sprite('past3',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast1 = add([
            rect(width()*0.8,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.9),
            area()
        ]);

        toPast1.onHover(() => invtry.cursor_pointer = true)
        toPast1.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast1.onClick(() => {
            go('past1')
        });

        const toCD1 = add([
            rect(width()*0.2,height()*0.2,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.5,height()*0.5),
            area()
        ]);

        toCD1.onHover(() => invtry.cursor_pointer = true)
        toCD1.onHoverEnd(() => invtry.cursor_pointer = false)
        toCD1.onClick(() => {
            go('cd1')
        });


        const dialogueData = {
            start: {
                text: "Salutations, que puis-je faire pour vous ?",
                choices: [
                    { text: "Avez-vous vu passer quelqu'un de suspect ?", next: "suspect" },
                    { text: "Que vendez-vous ?", next: "shop" },
                    { text: "Non merci, je ne fais que passer.", next: "leave" }
                ]
            },

            suspect: {
                text: "Un homme s'est dirigé vers la Domus plus loin, il avait l'air pressé. Avez-vous besoin d'autre chose ?",
                choices: [
                    { text: "Merci pour le renseignement !", next: "end" },
                    { text: "Il faut suivre la route ?", next: "road" }
                ]
            },

            road: {
                text: "Oui.",
                choices: [
                    { text: "Merci.", next: "end" }
                ]
            },

            shop: {
                text: "Des fruits, du raisin et des pots ! Vous voulez acheter quelque chose ?",
                choices: [
                    { text: "Oui ! J'aimerai…", next: "noMoney" },
                    { text: "Non j'ai tout ce qu'il me faut.", next: "bye" }
                ]
            },

            noMoney: {
                text: "Et avec quel argent ? Ouste !",
                choices: [
                    { text: "...", next: "end" }
                ]
            },

            bye: {
                text: "Bon voyage !",
                choices: [
                    { text: "...", next: "end" }
                ]
            },

            leave: {
                text: "Bonne journée !",
                choices: [
                    { text: "...", next: "end" }
                ]
            },

            end: null
        }

        const npc = add([
            sprite("npc"),
            scale(0.2),
            anchor("center"),
            pos(width() * 0.7, height() * 0.65),
            area()
        ])

        npc.onHover(() => invtry.cursor_pointer = true)
        npc.onHoverEnd(() => invtry.cursor_pointer = false)
        npc.onClick(() => {
            startDialogue(dialogueData)
        })

        
    })
}