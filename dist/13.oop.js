"use strict";
class Company {
    static showData() {
        for (const person of this.employeeList) {
            person.showDetail();
        }
    }
}
Company.cName = "บริษัท ABC จำกัด";
Company.employeeList = [];
class Employee2 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showDetail() {
        console.log(`ชื่อ = ${this.name} , แผนก = ${this.department} , เงินเดือน = ${this.salary} บาท`);
    }
    // getter
    get Salary() {
        return this.salary;
    }
    // setter
    set Salary(newSalary) {
        this.salary = newSalary;
    }
}
class IT extends Employee2 {
    constructor(name, salary) {
        super(name, "ไอที", salary);
        this.income = salary;
    }
    reportIncome() {
        console.log(`รายได้ต่อปีของฝ่ายไอที = ${this.income * 12}`);
    }
}
class Accounting extends Employee2 {
    constructor(name, salary) {
        super(name, "บัญชี", salary);
        this.income = salary;
    }
    reportIncome() {
        console.log(`รายได้ต่อปีของฝ่ายบัญชี = ${this.income * 12}`);
    }
}
const emp01 = new Employee2("kong", "ธุรการ", 50000);
const emp02 = new IT("jojo", 100000);
const emp03 = new Accounting("satoshi", 30000);
console.log(emp01.Salary);
emp01.Salary = 70000;
Company.employeeList.push(emp01);
Company.employeeList.push(emp02);
Company.employeeList.push(emp03);
console.log("ข้อมูลพนักงาน" + Company.cName);
Company.showData();
emp02.reportIncome();
emp03.reportIncome();
// Parameter Properties
class Employee3 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showDetail() {
        console.log(`ชื่อ = ${this.name} , แผนก = ${this.department} , เงินเดือน = ${this.salary} บาท`);
    }
    // getter
    get Salary() {
        return this.salary;
    }
    // setter
    set Salary(newSalary) {
        this.salary = newSalary;
    }
}
const emp10 = new Employee3("New", "Graphic", 40000);
console.log(emp10);
// Abstract Class & Method
class Employee4 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showDetail() {
        console.log(`ชื่อ = ${this.name} , แผนก = ${this.department} , เงินเดือน = ${this.salary} บาท`);
    }
    // getter
    get Salary() {
        return this.salary;
    }
    // setter
    set Salary(newSalary) {
        this.salary = newSalary;
    }
}
class IT4 extends Employee4 {
    constructor(name, salary) {
        super(name, "ไอที", salary);
    }
    info() {
        console.log("พัฒนาโปรแกรมภายในบริษัท");
    }
}
class Accounting4 extends Employee4 {
    constructor(name, salary) {
        super(name, "บัญชี", salary);
    }
    info() {
        console.log("จัดการบัญชีในบริษัท");
    }
}
const emp11 = new IT4("jojo", 100000);
const emp12 = new Accounting4("satoshi", 30000);
emp11.info();
emp12.info();
