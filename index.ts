import { Astronaut } from "./Astronauts";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";

function rocketDetails(rocket : Rocket){
    console.log("Rocket Details");
    console.log("Name : " + rocket.name);
    console.log("Total Capacity : " + rocket.totalCapacityKg);
    astronautsDetails(rocket.astronauts);
    cargosDetails(rocket.cargoItems);
}

function cargosDetails(cargos : Cargo[])
{
    for(let cargo of cargos)
    {
        console.log(cargo.massKg);
        console.log( cargo.material);
    }

}

function astronautsDetails(astronauts : Astronaut[])
{
    for(let astronaut of astronauts)
    {
        console.log(astronaut.name);
        console.log(astronaut.massKg);
    }

}




//Object of rocket
let rocket = new Rocket("FIRE",2507);

//Object of astronaut
let astronaut = new Astronaut(73, "Sushant Kumar");

//Adding object of astronaut in rocket
rocket.addAstronaut(astronaut);

//Object of astronaut
astronaut = new Astronaut(68, "Kamal Khan");

//Adding object of astronaut in rocket
rocket.addAstronaut(astronaut);

//Object of astronaut
astronaut = new Astronaut(67, "Meera gupta");

//Adding object of astronaut in rocket
rocket.addAstronaut(astronaut);

//Object of cargo
let cargo = new Cargo(600, "Foods");

//Adding cargo object to rocket
rocket.addCargo(cargo);

//Object of cargo
cargo = new Cargo(350, "Cloths");

//Adding cargo object to rocket
rocket.addCargo(cargo);

//Object of cargo
cargo = new Cargo(300, "Necessary stuffs");

//Adding cargo object to rocket
rocket.addCargo(cargo);

//Calling rocketDetails function
rocketDetails(rocket);