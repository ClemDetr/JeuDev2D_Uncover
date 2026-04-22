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
import * as scene229 from "./scenes/229.js";
import * as scene230 from "./scenes/230.js";
import * as scene231 from "./scenes/231.js";
import * as scene234 from "./scenes/234.js";
import * as scene235 from "./scenes/235.js";
import * as scene236 from "./scenes/236.js";
import * as scene239 from "./scenes/239.js";
import * as lizard from "./scenes/lizard.js";
import * as lizard2 from "./scenes/lizard2.js";

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
scene229.init();
scene230.init();
scene231.init();
scene234.init();
scene235.init();
scene236.init();
scene239.init();
lizard.init();
lizard2.init();


// Start the game with go('EM')
go('217');