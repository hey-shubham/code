// selectors in js:

// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

// 1. getElementById: it is used to select an element by its id and it returns a single element
const obj1 = document.getElementById("first");
console.log(obj1);

// 2. getElementsByClassName: it is used to select elements by their class name and it returns a collection of elements
const obj2 = document.getElementsByClassName("header2");
console.log(obj2);

// 3. getElementsByTagName: it is used to select elements by their tag name and it returns a collection of elements
const obj3 = document.getElementsByTagName("h1");
console.log(obj3);

// 4. querySelector: it is used to select the first element that matches a specified CSS selector and it returns a single element
const obj4 = document.querySelector(".header2");
console.log(obj4);

// 5. querySelectorAll: it is used to select all elements that match a specified CSS selector and it returns a collection of elements
const obj5 = document.querySelectorAll(".header2");
console.log(obj5);

