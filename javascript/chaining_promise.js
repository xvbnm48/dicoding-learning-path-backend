const state = {
  stock: {
    coffeBeans: 250,
    water: 1000,
  },
  isCoffeMachineBusy: false,
};
const checkAvailability = () => {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      if (!state.isCoffeMachineBusy) {
        resolver("coffee machine is ready");
      } else {
        reject("coffee machine is busy");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolver, reject) => {
    state.isCoffeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
        resolver("stock ready, can make coffee");
      } else {
        reject("stock not ready, cannot make coffee");
      }
    }, 1500);
  });
};

const brewCoffe = () => {
  console.log("brewing coffee");
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolver("coffee is ready");
    }, 2000);
  });
};

function makeExpresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return brewCoffe();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeMachineBusy = false;
    })
    .catch((rejectReason) => {
      console.log(rejectReason);
      state.isCoffeMachineBusy = false;
    });
}

makeExpresso();
