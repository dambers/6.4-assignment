// object and object methods

const user = {
    firstname: "Demetris",
    lastname: "Ambers",
    age: 34,
    college: true, 
    hobbies: ["comics, play pool, gym"],
    fullname: function () {
        document.write(this.firstname+ " " +this.lastname);
    }
};
console.log(fullname);


//object arrays methods
let fruits = ["grapes", "bananas", "peaches"];

fruits [0] = "berries";

console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
