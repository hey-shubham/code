console.clear();

let user= {
    name:"shubham",
    age:22
}

Object.defineProperty(user,"name",{
        writable:false,
    })
user.name="Dynamic";
    
console.log(user);
console.log(Object.getOwnPropertyDescriptor(user,"name"));



    