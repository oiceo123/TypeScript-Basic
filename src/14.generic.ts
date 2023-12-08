// ปัญหา
function getElementNumber(arr: number[], count: number): number[] {
  return arr.slice(arr.length - count);
}
function getElementString(arr: string[], count: number): string[] {
  return arr.slice(arr.length - count);
}
function getElementBoolean(arr: boolean[], count: number): boolean[] {
  return arr.slice(arr.length - count);
}

const myNum: number[] = [10, 20, 30, 40, 50];
const myString: string[] = ["A", "B", "C", "D"];
const myBool: boolean[] = [true, false, true, true];

console.log(getElementNumber(myNum, 3));
console.log(getElementString(myString, 3));
console.log(getElementBoolean(myBool, 2));

// Generic Function
function getElement<T>(arr: T[], count: number): T[] {
  return arr.slice(arr.length - count);
}

console.log(getElement<number>(myNum, 3));
console.log(getElement<string>(myString, 3));
console.log(getElement<boolean>(myBool, 2));

// Generic Multiple Type
function merge<T, U>(param1: T, param2: U) {
  return {
    ...param1,
    ...param2,
  };
}

const product = { name: "เสื้อ", price: 500 };
const description = { colors: ["ขาว", "แดง", "เขียว"] };

console.log(merge<object, object>(product, description));

// ปัญหาที่ต้องใช้ Generic Constraints
console.log(merge(product, "kong"));

// Generic Constraints
function merge2<T extends object, U extends object>(param1: T, param2: U) {
  return {
    ...param1,
    ...param2,
  };
}

console.log(merge2(product, description));

// Generic Class
class Stack<T> {
  private items: T[] = [];
  pushElement(element: T) {
    this.items.push(element);
  }
}

const stack = new Stack<string>();
stack.pushElement("kong");
stack.pushElement("jojo");
console.log(stack);

// Generic Default Type
class Stack2<T = string> {
  private items: T[] = [];
  pushElement(element: T) {
    this.items.push(element);
  }
}

const stack2 = new Stack2();
stack2.pushElement("kong");
stack2.pushElement("jojo");
console.log(stack2);

const stack3 = new Stack2<number>();
stack3.pushElement(100);
stack3.pushElement(200);
console.log(stack3);
