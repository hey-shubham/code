console.clear();

// callback function(ek function ke andr dusre function ko as a arguement pass krna)
function callBack(fun) {
  console.log("I am a callback function");
  fun();
}

// function that takes a callback function as an argument
function caller() {
  console.log("I am a caller function");
}

callBack(caller);


// notes on callback functions
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// Callback functions are commonly used in asynchronous programming to handle events or to perform actions after a certain task has been completed.
// They can be used to avoid blocking the main thread of execution and to allow for more efficient code.
// In JavaScript, callback functions are often used in conjunction with functions like setTimeout, setInterval, and event listeners to handle asynchronous operations.
