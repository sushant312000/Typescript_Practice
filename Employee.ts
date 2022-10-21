interface EmployeeInfo {
    name: string;
    age: number;
}

class prmntEmployee implements EmployeeInfo {
    name: string;
    age: number;
    salary: number;

    constructor(name:string, age:number, salary:number){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

}

class tempEmployee implements EmployeeInfo{
    name: string;
    age: number;
    wages: number;

    constructor(name: string, age: number, wages: number){
        this.name = name;
        this.age = age;
        this.wages = wages
    }
}