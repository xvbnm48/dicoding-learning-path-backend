function greetings(name, languange) {
  if (languange == "jp") {
    console.log("こんにちは、" + name + "さん");
  } else if (languange == "en") {
    console.log("Hello, " + name + "!");
  } else {
    console.log("selamat pagi ${name}");
  }
}

greetings("sakrua endo", "jp");

function perhitungan(a, b) {
  return a * b;
}

let result = perhitungan(2, 3);
console.log(result);

const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting("Ron", "English"));
