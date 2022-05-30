const myMap = new Map([
  ["1", "a string key"],
  ["2", "another string key"],
  [true, true],
]);

console.log(myMap);

// get map
const idol = new Map([
  ["center", "sakura"],
  ["solo", "aruno"],
  ["leader", "kodama"],
]);

console.log(idol);
console.log(idol.size);
console.log(idol.get("solo"));
// console.log(idol.get("center"));
// console.log(idol.has("solo"));
// console.log(idol.has("leader"));
// console.log(idol.set("graduate", "murisage"));
// console.log(idol.get("graduate"));
