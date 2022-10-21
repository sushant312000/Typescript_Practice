class Employee{
    constructor (name: string){
        console.log(name +  " from constructor");
    }

    //non-static
    getId(){
        return 100;
    }
}

class PermanentEmployee extends Employee{
    constructor(name: string){
        super(name);
        console.log(name + " from permanent employee");
    }

    getId(){
        return super.getId();
    }
}

let employee = new PermanentEmployee("Sanjay");
console.log(employee.getId()); 