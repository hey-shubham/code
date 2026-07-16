console.clear();

// let obj = {
//     name: ": shubham",
//     age: 22,
//     gender: ": Male",
//     city: ": dehradun"
// };

// // for in loop

// // for(let key in obj){
// //     // console.log(key);
// //     console.log(key,obj[key]);
// // }

// Object.defineProperty(obj,'name',{
//     value: "shubh",
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })
// obj.name= "dynamic";
// console.log(obj);

// Writable: true, // The property can be changed
// Enumerable: true, // The property will show up during enumeration (e.g., in a for...in loop)
// Configurable: true, // The property can be deleted or modified (e.g., changing its attributes)


// yaha ye(obj1.account_no=4139;) isiliye change nh hua hai qki writable property false kar di hai.
let obj1={
    name: "shubham kumar",
    age: 23,
    account_no: 41394319919,
    account_balance: 2500,
}
Object.defineProperty(obj1,'account_no',{
    writable:false,
})
obj1.account_no=4139;
console.log(obj1);