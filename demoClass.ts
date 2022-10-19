//create a class
class Person {
    //instance variables
    name: string="";
    age: number=0;

    //constructor
    constructor(pName: string, pAge:number){
        this.name = pName;
        this.age = pAge;
    }

    //static
    static display(){
        console.log("Static method...");
    }

    greetPerson(){
        console.log("Hello" + this.name);
    }
}

//Create an object
let personOne = new Person("Sanjay", 25);
console.log(personOne);
personOne.greetPerson();

Person.display();
