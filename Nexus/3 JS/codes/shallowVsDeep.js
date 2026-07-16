console.clear();

let obj1 = {
    name:"shubham",
    age:22
};

// shallow copy
// value of obj1 is also changed
let obj2 = obj1;
obj2.age=30;
console.log(obj2,"\n","shallow copy",obj1);

// Deep copy
// only value of obj3 is changed.
let obj3 = structuredClone(obj1);
obj3.age=40;
console.log(obj3,"\n","deep copy",obj1);