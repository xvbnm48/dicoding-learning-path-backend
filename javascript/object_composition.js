const candSendMessage = (self) => ({
  sendMessage: () => console.log("send message:", self.message),
});

const checkIsValidPhone = (self) => ({
  isValid: () => console.log("valid phone= ", self.form),
});

const personalEnterpise = (from, message, store) => {
  const self = {
    from,
    message,
    store,
  };
  const personalEnterpiseBehaviors = (self) => ({
    createCatalog: () => console.log("catalog is created:", self.store),
  });

  return Object.assign(
    self,
    personalEnterpiseBehaviors(self),
    candSendMessage(self),
    checkIsValidPhone(self)
  );
};
const pel = personalEnterpise(
  "kobo@hololive.com",
  "produk: pistol tenengneng",
  "hololive"
);

pel.createCatalog(); // catalog is created: hololive
pel.sendMessage(); // send message: produk: pistol tenengneng
