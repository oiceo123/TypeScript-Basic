// Interface
interface Person2 {
  name: string;
  age?: number;
}

interface Person2 {
  gender?: string;
}

let person2: Person2 = {
  name: "satoshi",
  age: 10,
};
console.log(person2);

// Type aliases
type Person3 = {
  name: string;
  age?: number;
};

// error เพราะ type จะไม่สามารถใช้ชื่อซ้ำกันได้ ทำให้ไม่สามารถขยาย property ได้
type Person3 = {
  gender?: string;
};

let person3: Person3 = {
  name: "satoshi",
  age: 10,
};
console.log(person3);
