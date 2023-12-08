"use strict";
// union type basic
let age;
age = 50;
age = "kong";
age = true;
console.log(age);
// union type (type aliases)
let coordinates;
coordinates = { x: 5, y: 10 };
coordinates = { lat: 40, long: 90 };
console.log(coordinates);
// union type function parameter
function sayHi(person) {
    if (typeof person === "string") {
        console.log(`สวัสดี = ${person}`);
    }
    else {
        person.forEach((element) => {
            console.log(`สวัสดี = ${element}`);
        });
    }
}
sayHi("mr.satan");
sayHi(["jojo", "gin", "satoshi"]);
let role1 = "Admin";
let role2 = "Editor"; // error เพราะใน Role ไม่มีค่า Editor
let align = "top - left";
console.log(align);
