console.clear();

const user = {
    name:"shubham",
    Account_Balance:50000,
    Address: {
        pincode: 248197,
        city:"Bounsi"
    }
};

console.log(user.Address.pincode);

// destructuring approach

// method1(destucturing)
// const {pincode:a,city:b} = user.Address;
// console.log(a,b);

// method 2(destructuring)
const {pincode,city} = user.Address;
console.log("Pincode : ",pincode,"\n","City : ",city);
