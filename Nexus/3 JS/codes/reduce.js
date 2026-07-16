console.clear();

// Reduce
const arr = [10,20,30,40,50,60];

// const result = arr.reduce(callback function, initialization)
const result = arr.reduce((acc,curr)=>acc+=curr,5)
console.log(result);  

// long method
// const result = arr.reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)


// mujhe btana hai kon si fruits kitni baar repeat hui hai
let arr1 = ["orange","mango","lichi","mango","apple","orange","coconut","mango","apple"];
const result1 = arr1.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;
    return acc;
},{})
console.log(result1);
