// OOP Basic
interface IReport {
  income: number;
  reportIncome(): void;
}

class Company {
  public static cName: string = "บริษัท ABC จำกัด";
  public static employeeList: Employee2[] = [];

  static showData() {
    for (const person of this.employeeList) {
      person.showDetail();
    }
  }
}

class Employee2 {
  private name: string;
  private department: string;
  private salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  public showDetail() {
    console.log(
      `ชื่อ = ${this.name} , แผนก = ${this.department} , เงินเดือน = ${this.salary} บาท`
    );
  }
  // getter
  get Salary(): number {
    return this.salary;
  }
  // setter
  set Salary(newSalary: number) {
    this.salary = newSalary;
  }
}

class IT extends Employee2 implements IReport {
  income: number;
  constructor(name: string, salary: number) {
    super(name, "ไอที", salary);
    this.income = salary;
  }
  reportIncome(): void {
    console.log(`รายได้ต่อปีของฝ่ายไอที = ${this.income * 12}`);
  }
}

class Accounting extends Employee2 implements IReport {
  income: number;
  constructor(name: string, salary: number) {
    super(name, "บัญชี", salary);
    this.income = salary;
  }
  reportIncome(): void {
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
  constructor(
    private name: string,
    private department: string,
    private salary: number
  ) {}
  public showDetail() {
    console.log(
      `ชื่อ = ${this.name} , แผนก = ${this.department} , เงินเดือน = ${this.salary} บาท`
    );
  }
  // getter
  get Salary(): number {
    return this.salary;
  }
  // setter
  set Salary(newSalary: number) {
    this.salary = newSalary;
  }
}

const emp10 = new Employee3("New", "Graphic", 40000);
console.log(emp10);

// Abstract Class & Method
abstract class Employee4 {
  private name: string;
  private department: string;
  private salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  public showDetail() {
    console.log(
      `ชื่อ = ${this.name} , แผนก = ${this.department} , เงินเดือน = ${this.salary} บาท`
    );
  }
  // getter
  get Salary(): number {
    return this.salary;
  }
  // setter
  set Salary(newSalary: number) {
    this.salary = newSalary;
  }

  abstract info(): void;
}

class IT4 extends Employee4 {
  constructor(name: string, salary: number) {
    super(name, "ไอที", salary);
  }
  info(): void {
    console.log("พัฒนาโปรแกรมภายในบริษัท");
  }
}

class Accounting4 extends Employee4 {
  constructor(name: string, salary: number) {
    super(name, "บัญชี", salary);
  }
  info(): void {
    console.log("จัดการบัญชีในบริษัท");
  }
}

const emp11 = new IT4("jojo", 100000);
const emp12 = new Accounting4("satoshi", 30000);

emp11.info();
emp12.info();
