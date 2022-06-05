//  impure function
let pi = 3.5;

const hitungLuasLingkaran = (r) => {
  return pi * (r * r);
};

console.log(hitungLuasLingkaran(5));

// pure function

const hitungLuasLingkaranPure = (r) => {
  return 3.14 * (r * r);
};

console.log(hitungLuasLingkaranPure(5));

const createPerson = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "aruno nakanishi",
};

const newPerson = createPerson(18, person);
console.log({
  person,
  newPerson,
});
