const email = {
  from: "fans@nogizaka46.com",
  sendMessage: function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  },
};

console.log(email.from);
email.sendMessage("hello", "aruno@nogizaka46.com");
