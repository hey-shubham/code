console.clear(0);

const arr=[10,20,30,40,50,"Shubham",true];
console.log(arr);
const arr3=arr;
console.log(arr3==arr); // true because they are same objects in memory.

// cloning an array.
const arr2=structuredClone(arr);
console.log(arr2);
console.log(arr==arr2); // false because they are different objects in memory.

// 3 way of picking a no.
console.log("The value at 6th place is: ",arr[5]);
console.log("The value at 6th place is: ",arr.at(5));
console.log("The value at 6th place is: ",arr.at(-2)); // It can take negative index also. -1 means last element, -2 means second last element and so on.

// Finding length of array
console.log("length of Array: ",arr.length);

// pushing an element in array, it adds an element at the end of the array.
let arr5=[10,20,"Krish"];
arr5.push("New Element");
console.log("arr5", arr5);

// popping an element from array, it removes the last element from the array and returns it.
let arr6=[10,20,30,40,50];
arr6.pop();
console.log("Popped Element: ",arr6.pop());
console.log("arr6", arr6);

// unshifting an element in array, it adds an element at the beginning of the array.
let arr7=[10,20,30];
arr7.unshift(5);
console.log("arr7", arr7);

// shifting an element from array, it removes the first element from the array and returns it.
let arr8=[10,20,30,40];
console.log("Shifted Element: ",arr8.shift());
console.log("arr8", arr8);

// difference between delete and pop/shift is that delete does not change the length of the array and leaves an empty slot, while pop/shift removes the element and changes the length of the array.

// delete operation, it removes the element from the array but does not change the length of the array.
let arr9=[10,20,30,40];
delete arr9[1];
console.log("arr9", arr9);
console.log("length of arr9: ",arr9.length); // length is still 4 because delete does not change the length of the array.

// indexOf method, it returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
let arr10=[10,20,30,40,20,50,20];
console.log("Index of 20: ",arr10.indexOf(20));
console.log("Last Index of 20: ",arr10.lastIndexOf(20)); // it returns the index of the last occurrence of the specified element in the array, or -1 if it is not found.

// includes method, it returns true if the array contains the specified element, otherwise false.
console.log("Does arr10 include 30? ",arr10.includes(30));
console.log("Does arr10 include 50? ",arr10.includes(50));


// slice method, it returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let arr11=[10,20,30,40,50];
console.log("Sliced Array: ",arr11.slice(1,4)); // it will return a new array with elements from index 1 to index 3 (4 is not included).
console.log("Original Array: ",arr11); // original array is not modified.

// splice method, it changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
let arr12=[10,20,30,40,50];
console.log("Spliced Array: ",arr12.splice(1,2)); // it will remove 2 elements from index 1 and return the removed elements in a new array.
console.log("Original Array: ",arr12); // original array is modified, it will remove the elements from index 1 and index 2.

// array to string conversion(2ways)
let arr13=[10,20,30,40,50];
console.log("Array to String: ",arr13.toString());
console.log("Array to String using join: ",arr13.join("-")); // it will join the elements of the array with the specified separator and return a string. If no separator is specified, it will use comma as default separator.
console.log(typeof arr13.join()); // string


// concat method, it is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let arr14=[10,20,30];
let arr15=[40,50];
let arr16=[12,34];
console.log("Concatenated Array: ",arr14.concat(arr15, arr16)); // it will merge arr14, arr15 and arr16 and return a new array.

arr14.push(arr15);
console.log("arr14 after push: ", arr14);
console.log(arr14[3][0]); // changed from arr14[2][0] to arr14[3][0]

// 2d array
let arr17=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr17[1]); // it will return the second array [4,5,6]

// 3d array 
let arr18=[[1,2,[4,5]],[3,6,7]];
console.log(arr18[0][2][0]); // it will access 4

// converting 3d array into 1d array
let newarr= arr18.flat(Infinity);
console.log(newarr);

let arr19=[1,2,3,"Hello",4,5];
console.log(typeof arr19[3]);