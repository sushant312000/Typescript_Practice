import { IPayload } from "./IPayload";
import { Astronaut } from "./Astronauts";
import { Cargo } from "./Cargo";

export class Rocket implements IPayload {
    massKg: number = 0;
    name: string = "";
    totalCapacityKg: number = 0;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //Sum mass method
    sumMass(item: IPayload[]): number {
        let sumOfAllItems = 0;
        for (let items of item) {
            sumOfAllItems += items.massKg;
        }

        return sumOfAllItems;
    }

    //Current mass method
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    //Can add item method
    canAdd(item: IPayload): boolean {
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
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }

    //Add astronaut method
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}