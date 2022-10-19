"use strict";
//create a class
class Person {
    //constructor
    constructor(pName, pAge) {
        //instance variables
        this.name = "";
        this.age = 0;
        this.name = pName;
        this.age = pAge;
    }
    //static
    static display() {
        console.log("Static method...");
    }
    greetPerson() {
        console.log("Hello" + this.name);
    }
}
//Create an object
let personOne = new Person("Sanjay", 25);
console.log(personOne);
personOne.greetPerson();
Person.display();
