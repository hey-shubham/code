// Default parameters
function meet(msg = "Hello") {
    console.log(msg);
}
// meet();
meet("hello world..!!");
// Optional Parameters
function Optional(person) {
    console.log(person || "Shubham");
}
Optional();
// Rest Parameters
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 33, 53, 54, 78, 47, 6, 34, 57, 76, 4);
// Arrow Function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 5));
// CallBack Function
function placeOrder(order, CallBack) {
    const amount = order + 10;
    CallBack(amount);
}
placeOrder(10, (amount) => {
    console.log(amount * amount);
});
export {};
