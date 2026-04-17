console.clear();

// filter,map,reduce methods

const students = [
    {name:"shubham", age:22, marks:82},
    {name:"riya", age:20, marks:32},
    {name:"aditya", age:24, marks:29},
    {name:"utkarsh", age:23, marks:30},
    {name:"rohit", age:22, marks:14},
]

// finding student who are pass(marks<=30)(filter method)
const result = students.filter(({marks})=> marks>29);
console.log(result);

// finding only marks(map method)
const result1 = students.map((s)=>s.marks)
console.log(result1);

// finding sum of total marks(reduce method)
const result2 = students.reduce((acc,s)=> acc+s.marks,0);
console.log(result2);