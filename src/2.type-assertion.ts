// เปลี่ยนชนิดข้อมูล
let username: unknown;
username = "kongruksiam";

// 1. as
console.log((username as string).toUpperCase());

// 2. <ชนิดข้อมูล>
console.log((<string>username).toUpperCase());
