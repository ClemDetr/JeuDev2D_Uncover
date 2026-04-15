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

// Initialize KAPLAY
kaplay({
    width : innerWidth,
    height : innerHeight
});

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

// Start the game with scene1
go('Mus1');