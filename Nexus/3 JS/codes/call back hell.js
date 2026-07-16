console.clear();

function placeOrder(callback){
    console.log("Talking with Domino's");

    setTimeout(()=>{
        console.log("Order Placed Successfully");
        callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza Preparation started...");

    setTimeout(()=>{
        console.log("Pizza preparation done");
        callback();
    },5000)
}

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order");

    setTimeout(()=>{
        console.log("Order Picked up by delivery Boy");
        callback();
    },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order deliver successfully");
    },5000)
}  

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
})


// callback function
// function fetchuser(callback){
//     console.log("Fetching the user detail...");
//     setTimeout(()=>{
//         console.log("Data fetched successfully");
//         const obj = {
//             name: "shubham",
//             age:22,
//             city:"Bihar",
//         };
//         // data fetched from backend
//         callback(obj);
//     },2000)
// }

// function greet(obj){
//     console.log(`hello ${obj.name}`);
// }

// function meet(obj){
//     console.log(`hello ${obj.name}, i will meet you in delhi`);
// }

// function printAge(obj){
//     console.log(`${obj.age}`);
// }

// fetchuser(greet);