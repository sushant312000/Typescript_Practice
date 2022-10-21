"use strict";
class Astronaut {
    constructor(mass, name) {
        this.mass = 0;
        this.name = "";
        this.mass = mass;
        this.name = name;
    }
}
class Cargo {
    constructor(massKg, material) {
        this.massKg = 0;
        this.material = "";
        this.massKg = massKg;
        this.material = material;
    }
}
class Rocket {
    constructor() {
        this.name = "";
        this.totalCapacityKg = 0;
        this.cargoItems = [];
        this.astronauts = [];
    }
}
