import { invtry, cursor, startDialogue } from "../main.js"

export{
    init
}

function init() {
    loadSprite('past0',"./assets/Past0.png")
    
    scene('past0', () => {
        add([
            
        sprite('past0',{
            width :
             width(),
            height : height()
        })
        ]);
        cursor()

        const toPast1 = add([
            rect(width()*0.2,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.4,height()*0.4),
            area()
        ]);

        toPast1.onHover(() => invtry.cursor_pointer = true)
        toPast1.onHoverEnd(() => invtry.cursor_pointer = false)
        toPast1.onClick(() => (go('past1')));

        const dialogueData = {
            start: {
                text: "...",
                choices: [
                    { text: "Miaou ?", next: "miaou1" },
                    { text: "Meow ?", next: "end" },
                    { text: "Maow ?", next: "end" }
                ]
            },
            miaou1: {
                text: "Miaou !",
                choices: [
                    { text: "Miaou ?", next: "end" },
                    { text: "Meow ?", next: "miaou2" },
                    { text: "Maow ?", next: "end" }
                ]
            },
            miaou2: {
                text: "Meow !",
                choices: [
                    { text: "Miaou ?", next: "end" },
                    { text: "Meow ?", next: "end" },
                    { text: "Maow ?", next: "miaou3" }
                ]
            },
            miaou3: {
                text: "Maow !",
                choices: [
                    { text: "Miaou ?", next: "end" },
                    { text: "Meow ?", next: "easter_egg" },
                    { text: "Maow ?", next: "end" }
                ]
            },
            easter_egg: {
                text: "T'as pas autre chose à faire que de parler à un chat ?",
                choices: [
                    { text: "...", next: "end" },
                ]
            },
            end: null
        }

        const chat = add([
            rect(width()*0.1,height()*0.3,{
                fill : false
            }),
            anchor("center"),
            pos(width()*0.767,height()*0.533),
            area()
        ]);
        
        chat.onHover(() => invtry.cursor_pointer = true)
        chat.onHoverEnd(() => invtry.cursor_pointer = false)
        chat.onClick(() => {
            startDialogue(dialogueData)
        });
    })
}