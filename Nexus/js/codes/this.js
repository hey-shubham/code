console.clear();
// "use strict"
// this keyword refers to the current object that is executing the code. It allows us to access properties and methods of the object from within its own context.

const obj = {
    name:"shubham",
    age:22,
    greet: function(){
        console.log(this.name); // this refers to the current object (obj) and allows us to access its properties
    }
}

console.log(obj);
obj.greet();