// receivesAFunction function
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
  // Define a named function and return it
  function namedFunction() {
    console.log("This is a named function");
  }
  return namedFunction;
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    console.log("This is an anonymous function");
  };
}

// Testing the functions
receivesAFunction(function () {
  console.log("Callback function called!");
});

const namedFunc = returnsANamedFunction();
namedFunc();

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();
