const stock = {
  coffeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeBeans >= 16 && stock.water >= 250) {
      resolve("stock ready, can make coffee");
    } else {
      reject("stock not ready, cannot make coffee");
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
};

checkStock().then(handleSuccess, handleFailure);
