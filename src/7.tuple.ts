// Tuple Basic
const point: [number, number] = [10, 20];

console.log(point);

// Tuple Label
const goodStatus: [code: number, status: string] = [200, "OK"];
const notFound: [code: number, status: string] = [404, "ไม่พบข้อมูล"];
const badRequest: [code: number, status: string] = [400, "คำขอไม่ถูกต้อง"];
const serverErr: [code: number, status: string] = [500, "Inernal Server Error"];

console.log(goodStatus[0]);
console.log(goodStatus[1]);

// Tuple Type
type HttpStatusCode = [number, string];

const createdStatus: HttpStatusCode = [201, "Created"];

console.log(createdStatus);
