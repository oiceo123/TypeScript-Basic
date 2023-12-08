"use strict";
// ปัญหา
function getElementNumber(arr, count) {
    return arr.slice(arr.length - count);
}
function getElementString(arr, count) {
    return arr.slice(arr.length - count);
}
function getElementBoolean(arr, count) {
    return arr.slice(arr.length - count);
}
const myNum = [10, 20, 30, 40, 50];
const myString = ["A", "B", "C", "D"];
const myBool = [true, false, true, true];
console.log(getElementNumber(myNum, 3));
console.log(getElementString(myString, 3));
console.log(getElementBoolean(myBool, 2));
// Generic Function
function getElement(arr, count) {
    return arr.slice(arr.length - count);
}
console.log(getElement(myNum, 3));
console.log(getElement(myString, 3));
console.log(getElement(myBool, 2));
// Generic Multiple Type
function merge(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
const product = { name: "เสื้อ", price: 500 };
const description = { colors: ["ขาว", "แดง", "เขียว"] };
console.log(merge(product, description));
// ปัญหาที่ต้องใช้ Generic Constraints
console.log(merge(product, "kong"));
// Generic Constraints
function merge2(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
console.log(merge2(product, description));
// Generic Class
class Stack {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack = new Stack();
stack.pushElement("kong");
stack.pushElement("jojo");
console.log(stack);
// Generic Default Type
class Stack2 {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack2 = new Stack2();
stack2.pushElement("kong");
stack2.pushElement("jojo");
console.log(stack2);
const stack3 = new Stack2();
stack3.pushElement(100);
stack3.pushElement(200);
console.log(stack3);
