console.clear();


// filter student who is pass(marks<=30)
const students = [
    {name:"shubham", age:22, marks:82},
    {name:"riya", age:20, marks:32},
    {name:"aditya", age:24, marks:29},
    {name:"utkarsh", age:23, marks:30},
    {name:"rohit", age:22, marks:14},
]

const result = students.filter(({marks})=> marks>29);
console.log(result);

// second method 
// const result = students.filter((obj)=>{
    // return obj.marks>29;
// })

// filter
let arr = [10,19,17,19,20,27,26];
const result1 = arr.filter((num)=> {
    return num%2==0;
})
console.log(result1);

// map
const arr2 = [1,2,3,4,5];
const result3 = arr2.map((num)=> num*num);
console.log(result3);

// Array me se only even no. ka square print krna hai
const arr4 = [1,2,3,4,5,6,7];
const output = arr4.filter((num)=> num%2==0).map((num)=>num*num);
console.log("Square of even no is: ",output);