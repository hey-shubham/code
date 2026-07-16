// Access Modifiers
class Customer {
    name:string;
    age:number;
    balance:number

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    meet():number{
        this.balance+=50000;
        return this.balance;
    }
}   

const C1 = new Customer("Shubham",22,1200);
const C2 = new Customer("Krish",13,50000);
const C3 = new Customer("Komal",22,1200);

console.log(C1);
console.log(C2.meet());
console.log(C3.age);   // Age priavte modifier hai isiliye error aa rha hai.



class Employee extends Customer{
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary = salary;
    }
}

const E1 = new Employee(10000,"Shubham",22,1200);
console.log(E1);
