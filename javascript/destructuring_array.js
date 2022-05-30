//Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. Sebelum ES6
const oshi = ["sakura endo", "sakura miyawaki", "aruno nakanishi"];

const [firtsOshi, secondOshi, thirdOshi] = oshi;
const [, , thirdOshi2] = oshi;

console.log(firtsOshi, secondOshi, thirdOshi);
console.log(thirdOshi2);

var a = 1;
var b = 2;
var temp;

console.log("Before swap: a = " + a + " b = " + b);
console.log("value of a before swap: " + a);
console.log("value of b before swap: " + b);

temp = a;
a = b;
b = temp;

console.log("After swap: a = " + a + " b = " + b);
console.log("value of a after swap: " + a);
console.log("value of b after swap: " + b);
