console.clear();

// Function: Parameter
function calculator(num1,num2,op){
   switch(op){
        case "sum":
            console.log("Addition of",num1,"and",num2,"is",num1+num2);
            break;
        case "sub":
            console.log("Subtraction of",num1,"and",num2,"is",num1-num2);
            break;
        case "mul":
            console.log("Multiplication of",num1,"and",num2,"is",num1*num2);
            break;
        case "div":
            console.log("Devision of",num1,"and",num2,"is",num1/num2);
            break;
    }
};

// Function call: Argument
calculator(20,5,"mul");



// funtion ke andr function
// let fun = function calculator(num1,num2,op){
//    switch(op){
//         case "sum":
//             console.log(num1+num2);
//             break;
//         case "sub":
//             console.log(num1-num2);
//             break;
//         case "mul":
//             console.log(num1*num2);
//             break;
//         case "div":
//             console.log(num1/num2);
//             break;
//     }
// };

// // Function call: Argument
// fun(20,5,"mul");


// Arrow function

let fun = ()=>{
    console.log("Hello!");
};

fun();

// Method1
let fun1 = (Number1, Number2)=>{
        return Number1+Number2;
};

console.log(fun1(10,20)); 

// Method2
let fun2 = (Number1, Number2)=> Number1+Number2;
console.log(fun1(10,20)); 

// when we have single parameter
let cube = side => side*side*side;
console.log(cube(5));