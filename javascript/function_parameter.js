const user = {
  id: 1,
  displayName: "aruno",
  name: "aruno nakanishi",
};

function introduce({ id, displayName, name }) {
  console.log(`Hello, ${displayName} (id: ${id})`);
  console.log(`Hello, ${name} (id: ${id})`);
}

introduce(user);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));
