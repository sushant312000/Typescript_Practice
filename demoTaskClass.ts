//Class creation
class Student {
    stuId: number = 0;
    stuName: string = "";
    stuAge: number = 0;
    stuStandard: number = 0;
    stuRoll: number = 0;
    stuAddress: string = "";
    stuContact: number = 0;

    //Constructor
    constructor(stuId: number, stuName: string, stuAge: number, stuStandard: number, stuRoll: number, stuAddress: string, stuContact: number) {
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
let stuArray: Student[] = [];

//Fucntion to put info in array
function getStuInfo(){
    for(let i=0; i<5; i++){
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
