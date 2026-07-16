console.clear();

let user1 = {
    name: "shubham",
    age:20
};


let user2 = {
    amount:30,
    money:10
};

// prototype(inheritance)
user2.__proto__ = user1;
console.log(user2.name,'\n',user2.age,'\n',user2);