const executorFunction = (resolve, reject) => {
  const isCoffeMakerReady = true;
  if (isCoffeMakerReady) {
    resolve("Coffee is ready");
  } else {
    reject("Coffee is not ready");
  }
};

const makeCoffe = () => {
  return new Promise(executorFunction);
};

const coffePromise = makeCoffe();
console.log(coffePromise);
