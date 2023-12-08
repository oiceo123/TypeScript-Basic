"use strict";
let person = {
    name: "ก้อง",
    age: 30,
    gender: "ชาย",
    info() {
        console.log(`ข้อมูลล่าสุด = ${new Date().toLocaleString()}`);
    },
    title: "รับราชการ",
    income: 18000,
    address: "กรุงเทพมหานคร",
};
console.log(person);
person.info();
