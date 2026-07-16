class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

const obj1 = new Person("Shubham", 22);
const obj2 = new Person("Rohan", 24);
const obj3 = new Person("Rohit", 23);
const obj4 = new Person("Mohit", 21);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);