import { IPanthera } from "./IPanthera";
import { Tiger } from "./Tiger.js";

function pantheraSounds(panthera: IPanthera){
    console.log(`panthera say ${panthera.roar}`);
}

let tiger = new Tiger();
pantheraSounds(tiger);