console.clear();

// for of loop
const arr= [10,12,20,18,13];
for(let value of arr)
{
    console.log(value);
}

console.log("Second  method\n");

// for in loop
const arr1= [10,12,20,18,13];
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}; 


// string print
let str = "shubham is a gamer";
for(let value of str){
    console.log(value);
}

// don't use for of loop in object(getting type error)
// const obj = {
//     name:"shubh",
//     age:22
// }
// for(let value of obj)
// {
//     console.log(value);
// }