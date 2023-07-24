import { add } from "./lib.js"
// using non-default export allows importing individual data
import math from "./lib.js"

console.log(add(3, 10));
console.log(math.add(3, 10));
console.log(math.multiply(3, 6));
// console.log(multiply(3, 6)); // not defined








/*
// import y from "./lib.js"
// import { data, obj } from "./lib.js"
import y, { data, obj } from "./lib.js"

console.log(y);
console.log(data);
console.log(obj);
*/