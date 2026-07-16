// Interface
interface person{
    name : string,
    age : number,
    gender : string,
    aadhar? : number
}

const detail : person = {
    name : "shubham",
    age : 20,
    gender : "male",
};

// Partial <--->
interface customer{
    name : string,
    age : number,
    gender : string,
    aadhar : number,
    balance : number,
    nominee : string,
    mobile : number
}

// Partial <--->
const obj1 : Partial<customer> = {
    name : "Shubham",
    age : 20,
    aadhar : 412627444385,
    balance: 1100
};

// Required <--->
const obj2 : Required<customer> = {
    name : "Shubham",
    age : 20,
    gender: "Male",
    aadhar : 412627444385,
    balance: 1100,
    nominee: "Pankaj kumar",
    mobile: 9835749276,

};
