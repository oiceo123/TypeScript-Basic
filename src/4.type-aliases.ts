type Employee = {
  readonly id: number;
  name: string;
  salary: number;
  phone?: string;
};

let emp1: Employee = {
  id: 1,
  name: "kong",
  salary: 50000,
  phone: "060-xxx-xxxx",
};

let emp2: Employee = {
  id: 1,
  name: "kong",
  salary: 50000,
};

console.log(emp1);
console.log(emp2);

emp1.id = 22; // error เพราะ property เป็น readonly
