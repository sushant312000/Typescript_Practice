"use strict";
//Object creation
const person = {
    name: 'Sanjay',
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
//Print object 
console.log(person.name);
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
let greet = "";
function greetPerson(name) {
    if (name == 'Nithin') {
        greet = 'Hello Nithin';
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Ahmer");
//arrays
let colors = ['Red', 'Blue', 'Green'];
for (let index in colors) {
    console.log(colors[index]);
}
let letters = "AWESOME";
for (let i = 0; i < letters.length; i++) {
    console.log(letters.charAt(i) + "\n");
}
