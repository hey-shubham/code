// function value(a:(number|string|number[])|boolean) : ((number|string|number[]|boolean)){
//     return a;
// }

function value<T>(a:T):T{
    return a;
}

console.log(value(10));
console.log(value<String>("Shubham"));
console.log(value([10, 20, 30, 40, 50]));
console.log(value(true));
console.log(value(["Shubham", "Krish"]));