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

const {Address: { pincode } } = user;
console.log(pincode);

// destructuring approach

// object destructure

// method1(destucturing)
const {pincode:a,city:b} = user.Address;
console.log(a,b);

// method 2(destructuring)
// const {pincode,city} = user.Address;
// console.log("Pincode : ",pincode,"\n","City : ",city);


// array destructuring
const arr = [2,3,5,7,6];
const [first,second, , ,third] = arr;
console.log(first,second,third);

// using rest operator[...()]
const [first1,second2,...third3] = arr;
console.log("5,7,6 is rest operator: ",first1,second2,third3);