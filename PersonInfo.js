"use strict";
class PersonInfo {
    //constructor
    constructor(name, age) {
        //declaring variables
        this.name = "";
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getDetail() {
        return "Name is : " + this.getName();
    }
}
