console.clear();
console.log("Hosting in JavaScript");
// what is hosting in javascript?
// --> Hosting in JavaScript refers to the behavior of variable and function declarations being moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// For example:
console.log(x); // Output: undefined
var x = 5;  
// In this example, the variable declaration `var x` is hoisted to the top of the scope, but the assignment `x = 5` is not. Therefore, when we try to log `x` before the assignment, it returns `undefined`.


// Function declarations are also hoisted, which means you can call a function before it is defined in the code.
greet(); // Output: "Hello!"
function greet() {
  console.log("Hello!");
}
// However, function expressions are not hoisted in the same way. If you try to call a function expression before it is defined, you will get an error.


greet(); // Error: greet is not a function
var greet = function() {
  console.log("Hello!");
};
// In this case, the variable `greet` is hoisted, but it is initialized with `undefined` until the assignment is executed. Therefore, when we try to call `greet` before the assignment, it results in an error because `greet` is not a function at that point.


// In summary, hosting allows you to use variables and functions before they are declared in the code, but it can lead to unexpected behavior if not used carefully. It is generally recommended to declare variables and functions at the top of their scope to avoid confusion.