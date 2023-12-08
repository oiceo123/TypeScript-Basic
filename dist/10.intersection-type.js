"use strict";
// Intersection Type
// ใช้ interface แทน type ก็ได้ เช่น type Job1 -> interface Job1
let person1 = {
    name: "jojo",
    age: 25,
    gender: "ชาย",
    info() {
        console.log(`ข้อมูลล่าสุด = ${new Date().toLocaleString()}`);
    },
    title: "ผู้ใช้ stand",
    income: 100000,
    address: "กรุงเทพมหานคร",
};
console.log(person1);
