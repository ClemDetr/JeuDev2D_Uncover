import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

import * as Mus1 from "./scenes/Mus1.js";
import * as EM from "./scenes/EM.js";
import * as scene248 from "./scenes/248.js";
import * as LunA from "./scenes/LunA.js";
import * as PanA from "./scenes/PanA.js";
import * as OF from "./scenes/OF.js";
import * as LunC from "./scenes/LunC.js";
import * as PanC from "./scenes/PanC.js";
import * as RP from "./scenes/RP.js";
import * as scene242 from "./scenes/242.js";
import * as scene244 from "./scenes/244.js";
import * as scene225 from "./scenes/225.js";
import * as scene226 from "./scenes/226.js";
import * as scene224 from "./scenes/224.js";
import * as scene223 from "./scenes/223.js";
import * as scene222 from "./scenes/222.js";
import * as scene221 from "./scenes/221.js";
import * as scene220 from "./scenes/220.js";
import * as scene219 from "./scenes/219.js";
import * as PanF from "./scenes/PanF.js";
import * as scene217 from "./scenes/217.js";
import * as PanE from "./scenes/PanE.js";
import * as PanD from "./scenes/PanD.js";
import * as LunD from "./scenes/LunD.js";
import * as LunE from "./scenes/LunE.js";
import * as scene227 from "./scenes/227.js";
import * as scene228 from "./scenes/228.js";
import * as scene230 from "./scenes/230.js";
import * as scene231 from "./scenes/231.js";
import * as scene234 from "./scenes/234.js";
import * as scene235 from "./scenes/235.js";
import * as scene236 from "./scenes/236.js";
import * as scene239 from "./scenes/239.js";
import * as lizard from "./scenes/lizard.js";
import * as lizard2 from "./scenes/lizard2.js";
import * as past0 from "./scenes/past0.js";
import * as past1 from "./scenes/past1.js";
import * as past3 from "./scenes/past3.js";
import * as past4 from "./scenes/past4.js";
import * as CD0 from "./scenes/CD0.js";
import * as CD1 from "./scenes/CD1.js";
import * as CD2 from "./scenes/CD2.js";
import * as Domus from "./scenes/Domus.js";
import * as menu from "./scenes/menu.js";

// Initialize KAPLAY
kaplay({
    width : innerWidth,
    height : innerHeight
});


//variable globale
export const invtry = {
    key_arche : false,
    key_domus : false,
    cursor_pointer : false,
}

export function cursor() {
    invtry.cursor_pointer = false

    setCursor("none")

    loadSprite("souris","/assets/cursor.png")
    loadSprite("hand","/assets/hand.png")

    const cursor = add([
        sprite("souris"),
        pos(),
        z(999),
        fixed()
    ])

    
    
    onUpdate(() =>{
        cursor.pos = mousePos()
    
        if (invtry.cursor_pointer) {
            cursor.use(sprite("hand"))
        } else {
            cursor.use(sprite("souris"))
        }

        if (invtry.key_arche || invtry.key_domus) {
        const inventory = add([
            rect(width()*0.3, height()*0.1, {
                fill : true,
                color : rgb(255,255,255)
            }),
            pos(0,0),
        ])
        if (invtry.key_arche) {
            inventory.add([
                text("Inventaire : clé d'arche",{
                    size : 20,
                    color : rgb(0,0,0)
                }),
                pos(5,5),
                z(800)
            ])
        }else if (invtry.key_domus) {
            inventory.add([
                text("Inventaire : clé de domus",{
                    size : 20,
                    color : rgb(0,0,0)
                }),
                pos(5,5),
                z(800)
            ])
        }
    }
    })
}

export function startDialogue(data) {
    let current = "start"
    let elements = []
    

    function clearUI() {
        elements.forEach(e => destroy(e))
        elements = []
    }

    function showNode(id) {
        clearUI()

        if (!data[id]) return

        const node = data[id]

        const box = add([
            rect(width()*0.8, 160),
            pos(width()*0.1, height() - 300),
            color(0, 0, 0),
            fixed(),
            z(100)
        ])

        const txt = add([
            text(node.text, { width: width()*0.8 - 40, size: 20 }),
            pos(width()*0.1 + 20, height() - 280),
            fixed(),
            z(101)
        ])

        elements.push(box, txt)

        node.choices.forEach((choice, i) => {
            const btn = add([
                text(choice.text, { size: 16 }),
                pos(width()*0.1 + 40, height() - 240 + i * 25),
                area(),
                fixed(),
                z(101)
            ])

            btn.onHover(() => btn.color = rgb(200, 200, 0))
            btn.onHoverEnd(() => btn.color = rgb(255, 255, 255))

            btn.onClick(() => {
                if (choice.next === "end") {
                    clearUI()
                } else {
                    wait(0.2, () => {
                    showNode(choice.next)})
                }
            })

            elements.push(btn)
        })
    }

    showNode(current)
}


// Initialize scenes
Mus1.init();
EM.init();
scene248.init();
LunA.init();
OF.init();
PanA.init();
LunC.init();
PanC.init();
RP.init();
scene242.init();
scene244.init();
scene217.init();
scene219.init();
scene220.init();
scene221.init();
scene222.init();
scene223.init();
scene224.init();
scene225.init();
scene226.init();
PanF.init();
PanD.init();
PanE.init();
LunE.init();
LunD.init();
scene227.init();
scene228.init();
scene230.init();
scene231.init();
scene234.init();
scene235.init();
scene236.init();
scene239.init();
lizard.init();
lizard2.init();
past0.init();
past1.init();
past3.init();
past4.init();
CD0.init();
CD1.init();
CD2.init();
Domus.init();
menu.init();


// Start the game with go('menu')
go('past1');