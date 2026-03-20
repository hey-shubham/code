console.clear();

// obj ka use ham isiliye krte hai taki hme pta chal ske ki wo value kiski hai.
// obj key-pair value store krta hai.

let obj= {
    user_name:"shubham",
    acc_number:41392619919, 
    acc_balance:20000,
}
console.log(obj);

// yaha const ke obj1 ke andar ham acc_balance ki value change kr skte hai qki obj1 ek reference type hai. 
// isliye ham uske andar ki value change kr skte hai. qki obj1 ka address memory me same rhega. 
// jabki agar ham obj1 ko kisi or value se assign krne ki koshish krenge to error aayega.
const obj1= {
    user_name:"Krish",
    acc_number:41392619919, 
    acc_balance:20000,
}
obj1.acc_balance=15000;
console.log(obj1);

obj=obj1;
console.log(obj);

const my =new Object();
    my.name="shubham";
    my.age=22;
    my.branch="cse";
console.log(my);

// constructor
class people{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

class Info{
    constructor(name,age,branch,gender){
        this.name=name;
        this.age=age;
        this.branch=branch;
        this.gender=gender;
    }
}

let person1=new people("shubham",22,"Male");
let person2=new Info("Riya",19,"cse","Female");
console.log(person1);
console.log(person2);

// accesing keys
const arr = Object.keys(obj);
console.log(arr);

// assign use case
const obj3 = {a:1,b:2};
const obj4 = {c:3,d:4};

// parameters me pehli value as a target consider hoti hai jiske karan uski value change ho jaati hai.
// isiliye hm ek empty obj banate hai pehle{},taki changes empty me hi ho.
const obj5 = Object.assign({},obj3,obj4);
console.log(obj5);

// second method

// spread operator
const obj6 = {...obj3,...obj4};
console.log("spread operator =",obj6);



