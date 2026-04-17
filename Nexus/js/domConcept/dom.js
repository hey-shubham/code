const obj1 = document.getElementById("first");
obj1.className = "shubham"; 

// changing class name without using index
const obj2 = document.getElementsByClassName("header2");
for(let el of obj2){
    el.className = "shubh";
}

// second method of changing a class name using index(not realiable for large classes)
// const obj2 = document.getElementsByClassName("header2");
// obj2[0].className = "shubh";

