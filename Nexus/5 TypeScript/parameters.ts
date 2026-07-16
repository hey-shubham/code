// Default parameters
function meet(msg : string = "Hello"){
    console.log(msg)
}

// meet();
meet("hello world..!!")

// Optional Parameters
function Optional(person?: string){
    console.log(person || "Shubham");
}

Optional();

// Rest Parameters
function total(...arr:number[]){
    let ans = 0;
    arr.forEach((val)=>ans = ans+val);
    console.log(ans);
}

total(2,33,53,54,78,47,6,34,57,76,4);


// Arrow Function
const sum = (a:number,b:number):number =>{
    return a+b;
}

console.log(sum(5,5));

// CallBack Function
function placeOrder(order:number, CallBack:(amount:number)=>void){

    const amount:number = order+10;
    CallBack(amount);
}

placeOrder(10,(amount)=>{
    console.log(amount*amount)
});