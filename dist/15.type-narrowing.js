"use strict";
// Typeof Guards ใช้เทียบ type
function truncate(value, length) {
    if (typeof value === "number") {
        return value.toString().slice(0, length);
    }
    return value.slice(0, length);
}
console.log(truncate("kong", 3));
console.log(truncate(12345, 3));
// Equality Narrowing ใช้เทียบค่า
function compareValue(x, y) {
    if (x == y) {
        console.log("เท่ากัน");
    }
    else {
        console.log("ไม่เท่ากัน");
    }
}
compareValue(3, "3");
// InstandOf Narrowing ตรวจสอบว่า Object นั้นถูกสร้างมากจาก Class ที่ระบุหรือไม
class User {
    constructor(username) {
        this.username = username;
    }
}
class Employee5 {
    constructor(name) {
        this.name = name;
    }
}
function printObject(obj) {
    if (obj instanceof Employee5) {
        console.log("เป็น object จาก Employee");
    }
    else {
        console.log("เป็น object จาก User");
    }
}
printObject(new Employee5("kong"));
function calculateArea(s) {
    switch (s.type) {
        case "rectangle":
            return s.width * s.height;
        case "triangle":
            return 0.5 * s.base * s.height;
        default:
            return new Error("เกิดข้อผิดพลาด");
    }
}
console.log(calculateArea({ width: 20, height: 20, type: "rectangle" }));
