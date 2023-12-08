"use strict";
// any ไม่เช็ค type
// unknown เช็ค type
let message;
let message2;
message = "kongruksiam";
message2 = "kongruksiam";
console.log(message.toUpperCase());
console.log(message2.toUpperCase()); // error เพราะว่าเป็น type unknown ที่จะเช็ค type ก่อน
