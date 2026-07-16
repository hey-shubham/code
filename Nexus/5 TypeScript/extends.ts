// Extends keyword
interface human{
    name: string,
    age: number
};

interface Teacher extends human{
    salary: number,
    department: string
};

const Details: Teacher = {
    name: "Vishant sir",
    age: 60,
    salary : 100000,
    department: "CSE"
};

console.log(Details);