// Interface Basic
interface Job {
  title: string;
  income: number;
}

interface Contact {
  address: string;
  phone?: string;
}

interface Person extends Job, Contact {
  name: string;
  age?: number;
  readonly gender: string;
  info: () => void;
}

let person: Person = {
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
