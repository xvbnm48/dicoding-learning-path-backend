// array
const komik = [
  "bloom into you",
  "naruto",
  "one piece",
  "dragon ball",
  "bleach",
  "one punch",
];

const koleksi = ["action figure", "komik", "poster"];

const allMainan = [...komik, ...koleksi];

// console.log(komik);
// console.log(...komik);
console.log(allMainan);

// spread js for object

const obj1 = {
  firtname: "sakura",
  age: 18,
};

const obj2 = {
  lastname: "kurosaki",
  gender: "F",
};

const newObj = { ...obj1, ...obj2 };
console.log(newObj);
