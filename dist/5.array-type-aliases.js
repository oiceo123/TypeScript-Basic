"use strict";
const employees = [];
employees.push({ name: "kong", salary: 50000, department: "โปรแกรมเมอร์" });
employees.push({ name: "jojo", salary: 80000 });
employees.push({ name: "jobana", salary: 100000, department: "โปรแกรมเมอร์" });
for (const person of employees) {
    console.log(person);
}
