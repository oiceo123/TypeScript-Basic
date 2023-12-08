"use strict";
function sayHi(name) {
    if (!name) {
        return `Hello TypeScript`;
    }
    if (typeof name === "string") {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(sayHi());
console.log(sayHi("KongRuksiam"));
function total(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(total(100, 300));
console.log(total("100", "300"));
