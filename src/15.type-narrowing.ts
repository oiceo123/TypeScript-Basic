// Typeof Guards ใช้เทียบ type
function truncate(value: string | number, length: number) {
  if (typeof value === "number") {
    return value.toString().slice(0, length);
  }
  return value.slice(0, length);
}

console.log(truncate("kong", 3));
console.log(truncate(12345, 3));

// Equality Narrowing ใช้เทียบค่า
function compareValue(x: string | number, y: string | number) {
  if (x == y) {
    console.log("เท่ากัน");
  } else {
    console.log("ไม่เท่ากัน");
  }
}

compareValue(3, "3");

// InstandOf Narrowing ตรวจสอบว่า Object นั้นถูกสร้างมากจาก Class ที่ระบุหรือไม
class User {
  constructor(public username: string) {}
}

class Employee5 {
  constructor(public name: string) {}
}

function printObject(obj: Employee5 | User) {
  if (obj instanceof Employee5) {
    console.log("เป็น object จาก Employee");
  } else {
    console.log("เป็น object จาก User");
  }
}

printObject(new Employee5("kong"));

// Discriminated Unions สําหรับตรวจสอบและจําแนกรูปแบบการทํางานของ Type แบบ Union
interface Rectangle {
  width: number;
  height: number;
  type: "rectangle";
}

interface Triangle {
  base: number;
  height: number;
  type: "triangle";
}

type Shape = Rectangle | Triangle;
function calculateArea(s: Shape) {
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
