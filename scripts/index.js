import { Astronaut } from "./Astronauts";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";
function rocketDetails(rocket) {
    console.log("Rocket Details");
    console.log("Name : " + rocket.name);
    console.log("Total Capacity : " + rocket.totalCapacityKg);
    astronautsDetails(rocket.astronauts);
    cargosDetails(rocket.cargoItems);
}
function cargosDetails(cargos) {
    for (let cargo of cargos) {
        console.log(cargo.massKg);
        console.log(cargo.material);
    }
}
function astronautsDetails(astronauts) {
    for (let astronaut of astronauts) {
        console.log(astronaut.name);
        console.log(astronaut.massKg);
    }
}
//Application
let rocket = new Rocket("FIRE", 2507);
let astronaut = new Astronaut(73, "Sushant Kumar");
rocket.addAstronaut(astronaut);
astronaut = new Astronaut(68, "Kamal Khan");
rocket.addAstronaut(astronaut);
astronaut = new Astronaut(67, "Meera gupta");
rocket.addAstronaut(astronaut);
let cargo = new Cargo(600, "Foods");
rocket.addCargo(cargo);
cargo = new Cargo(350, "Cloths");
rocket.addCargo(cargo);
cargo = new Cargo(300, "Necessary stuffs");
rocket.addCargo(cargo);
rocketDetails(rocket);
