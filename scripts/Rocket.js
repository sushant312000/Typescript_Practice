export class Rocket {
    constructor(name, totalCapacityKg) {
        this.massKg = 0;
        this.name = "";
        this.totalCapacityKg = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //Sum mass method
    sumMass(item) {
        let sumOfAllItems = 0;
        for (let items of item) {
            sumOfAllItems += items.massKg;
        }
        return sumOfAllItems;
    }
    //Current mass method
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    //Can add item method
    canAdd(item) {
        let currentMass = this.currentMassKg();
        let mass = item.massKg;
        let total = currentMass + mass;
        if (total <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    //Add cargo method
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    //Add astronaut method
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
