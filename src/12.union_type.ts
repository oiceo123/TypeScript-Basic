// union type basic
let age: number | string | boolean;
age = 50;
age = "kong";
age = true;
console.log(age);

type Point = {
  x: number;
  y: number;
};

type Position = {
  lat: number;
  long: number;
};

// union type (type aliases)
let coordinates: Point | Position;
coordinates = { x: 5, y: 10 };
coordinates = { lat: 40, long: 90 };
console.log(coordinates);

// union type function parameter
function sayHi(person: string | string[]): void {
  if (typeof person === "string") {
    console.log(`สวัสดี = ${person}`);
  } else {
    person.forEach((element) => {
      console.log(`สวัสดี = ${element}`);
    });
  }
}

sayHi("mr.satan");
sayHi(["jojo", "gin", "satoshi"]);

// Literals Type ใช้กำหนดค่าว่าค่าที่ตัวแปรนั้นๆ เป็นได้มีอะไรบ้าง
type Role = "Admin" | "User";
let role1: Role = "Admin";
let role2: Role = "Editor"; // error เพราะใน Role ไม่มีค่า Editor

// Template Literals Type
type Vertical = "top" | "middle" | "bottom";
type Horizontal = "left" | "center" | "right";

// ค่าที่ alignment เป็นไปได้
// "top - left" | "top - center" | "top - right" |
// "middle - left" | "middle - center" | "middle - right" |
// "bottom - left" | "bottom - center" | "bottom - right"
type Alignment = `${Vertical} - ${Horizontal}`;

let align: Alignment = "top - left";

console.log(align);
