class ValidatorError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidatorError";
  }
}

let json = '{"age" : 30, "name" : "John"}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new ValidatorError("Name is required");
  }
  if (!user.age) {
    throw new ValidatorError("Age is required");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON Syntax Error");
  } else if (error instanceof ValidatorError) {
    console.log(`invalid data ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
