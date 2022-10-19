"use strict";
//Class creation
class Student {
    //Constructor
    constructor(stuId, stuName, stuAge, stuStandard, stuRoll, stuAddress, stuContact) {
        this.stuId = 0;
        this.stuName = "";
        this.stuAge = 0;
        this.stuStandard = 0;
        this.stuRoll = 0;
        this.stuAddress = "";
        this.stuContact = 0;
        this.stuId = stuId;
        this.stuName = stuName;
        this.stuAge = stuAge;
        this.stuStandard = stuStandard;
        this.stuRoll = stuRoll;
        this.stuAddress = stuAddress;
        this.stuContact = stuContact;
    }
}
//Created a array
let stuArray = [];
//Fucntion to put info in array
function getStuInfo() {
    for (let i = 0; i < 5; i++) {
        let stuId = prompt("Enter Id");
        let stuName = prompt("Enter Name");
        let stuAge = prompt("Enter age");
        let stuStandard = prompt("Enter standard");
        let stuRoll = prompt("Enter roll no.");
        let stuAddress = prompt("Enter address");
        let stuContact = prompt("Enter contact");
        let stuObj = new Student(stuId, stuName, stuAge, stuStandard, stuRoll, stuAddress, stuContact);
        stuArray.push(stuObj);
    }
    //Displaying the array after inserting
    console.log(stuArray);
}
//Calling the function
getStuInfo();
