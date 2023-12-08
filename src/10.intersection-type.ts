// Intersection Type
// ใช้ interface แทน type ก็ได้ เช่น type Job1 -> interface Job1

type Job1 = {
  title: string;
  income: number;
};

type Contact1 = {
  address: string;
  phone?: string;
};

type Person1 = {
  name: string;
  age?: number;
  readonly gender: string;
  info: () => void;
};

type People = Person1 & Job1 & Contact1;

let person1: People = {
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
