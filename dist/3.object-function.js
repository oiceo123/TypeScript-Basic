"use strict";
// รับค่า object
const user = { name: "jojo", age: 30 };
function showDetail(data) {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
}
showDetail(user);
// return ค่า object
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random(),
    };
};
console.log(randomPosition());
// Excess Properties Check ใช้เช็คว่า property เกินไปจากที่กำหนดไว้ใน function ไหม
showDetail({ name: "kongruksiam", age: 30 });
showDetail({ name: "kongruksiam", age: 30, address: "กรุงเทพมหานคร" });
