const names = ["sakura endo", "megumi kato", "makoto kato"];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(item)], index + 1);
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}`);

console.log({
  names,
  newNames,
});
