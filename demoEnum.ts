//Enum

/*

Administrator = 1
Manager = 2
Coordinator = 3

*/

enum Role {Admin, User, Manager, Coordinator}

let employeeinfo = {
    name: "Sanjay",
    age: 23,
    hobbies: ["Music", "Cycling", "Movie"],
    role: Role.Admin
}

//print output
if(employeeinfo.role === Role.Manager){
    console.log("Authorized to manager");
}
else{
    console.log("unauthorized access");
}