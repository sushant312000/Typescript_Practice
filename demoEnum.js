"use strict";
//Enum
/*

Administrator = 1
Manager = 2
Coordinator = 3

*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Manager"] = 2] = "Manager";
    Role[Role["Coordinator"] = 3] = "Coordinator";
})(Role || (Role = {}));
let employeeinfo = {
    name: "Sanjay",
    age: 23,
    hobbies: ["Music", "Cycling", "Movie"],
    role: Role.Admin
};
//print output
if (employeeinfo.role === Role.Manager) {
    console.log("Authorized to manager");
}
else {
    console.log("unauthorized access");
}
