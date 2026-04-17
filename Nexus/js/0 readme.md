# JavaScript Notes (Interview + Revision Ready 🔥)

---

# 1. JavaScript Kya Hai?

JavaScript ek **high-level, interpreted, single-threaded language** hai jo mainly browser me run hoti hai.
*“JavaScript is single-threaded but handles async using event loop and Web APIs”.

👉 Use cases:

* Web pages ko dynamic banana
* DOM manipulation
* Server side (Node.js)

---

# 2. Variables & Scope (Deep)

## var

* Function scoped
* Hoisted hota hai (undefined ke sath)
* Redeclare allowed

var a = 10;
var a = 20; // allowed

## let

* Block scoped
* Hoisted but TDZ me
* Reassign allowed

## const

* Block scoped
* Reassign NOT allowed

## Example:

```js
{
  let a = 10
}
console.log(a) // error
```

🔥 Scope Types:
Global scope
Function scope
Block scope
{
  let x = 10;
}
console.log(x); // ❌ error
---

# 3. Execution Context (Core Concept 🔥)

Jab JS code run hota hai to 2 phases hote hain:

## 1. Memory Phase

* Variables → undefined
* Functions → full definition

## 2. Execution Phase

* Line by line execution

👉 Ye concept **hoisting samajhne ke liye important hai**

🔥 Example:
console.log(a);
var a = 5;

👉 Memory phase:

a = undefined

👉 Execution:

print undefined

⚡ Call Stack:
JS ek stack use karta hai
functions push & pop hote hain

👉 Interview me ye poochte hi hain
---

# 4. Hoisting

```js
🔹 var hoisting:
console.log(a) // undefined
var a = 5
```

👉 var ko memory phase me undefined assign hota hai
👉 let/const TDZ me rehte hain

🔹 let/const:
console.log(a); // ❌ error
let a = 10;

👉 Ye TDZ (Temporal Dead Zone) me hote hain

---

# 5. Data Types

## Primitive

* String
* Number
* Boolean
* Null
* Undefined
* Symbol
* BigInt

## Non-Primitive

* Object
* Array
* Function

👉 Primitive → value copy
👉 Object → reference copy

⚡ Interview Trap:
typeof null // "object" 😵

---

# 6. this Keyword (Confusing but Important)

| Situation | this             |
| --------- | ---------------- |
| Global    | window           |
| Function  | window/undefined |
| Method    | object           |
| Arrow     | parent scope     |


this ka matlab hota hai “current context”

🔹 Cases:
1. Global scope
console.log(this);

👉 Browser me → window

2. Normal Function
function test(){
  console.log(this);
}
test();

👉 window (non-strict) / undefined (strict mode)

3. Object Method
let obj = {
  name: "shubham",
  getName: function(){
    console.log(this.name);
  }
}
obj.getName();

👉 this = obj

4. Arrow Function ⚠️
let obj = {
  name: "shubham",
  getName: () => {
    console.log(this.name);
  }
}

👉 this yaha parent se aata hai (object nahi)

🔥 Interview Line:

Arrow functions don’t have their own this, they inherit from parent scope


---

# 7. Functions

## Types

* Function Declaration
* Function Expression
* Arrow Function


1. Function Declaration
function a(){}

👉 hoisted ✔️

2. Function Expression
const a = function(){}

👉 not hoisted ❌

3. Arrow Function
const a = () => {}

⚡ Interview Trap:
console.log(a);
var a = function(){}

👉 undefined


## Difference

* Arrow me `this` nahi hota
* Arrow me `arguments` nahi hota

---

# 8. Closures (🔥 MUST KNOW)

Closure = function + uska lexical scope

```js
function outer(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

let fn = outer();
fn(); //1
fn(); //2
```
👉 count memory me store reh raha hai

👉 Use cases:

* Data hiding
* Private variables
* Counters

---

# 9. Arrays (Deep)

## Important Methods

### map

* Har element transform karta hai
* New array return karta hai

```js
[1,2,3].map(x => x*2) // [2,4,6]
```

### filter

* Condition check karta hai

```js
[1,2,3].filter(x => x>1) // [2,3]
```

### reduce

* Ek value banata hai

```js
arr.reduce((acc, curr) => acc + curr, 0)
```

⚡ Interview Trap:
[1,2,3].map(x => { x*2 })

👉 output: [undefined, undefined, undefined]

👉 kyun? → return missing
---

# 10. Objects

## Creation:
```js
let obj = {
  name: "shubham",
  age: 21
}
```

## Access

* Dot notation
* Bracket notation

```js
obj.name
obj["name"]
```

## Loop:
```js
for(let key in obj){
  console.log(key, obj[key]);
}
```

## Copy

* Spread → shallow
* Deep copy → JSON method

⚡ Interview Trap:
let obj = {a:1};
let b = obj;

b.a = 5;

👉 original bhi change hoga (same reference)
---

# 11. DOM (Document Object Model)

👉 HTML ka tree structure jo JS se control hota hai

---

# 12. Selecting Elements

```js
document.getElementById()
document.querySelector()
document.querySelectorAll()
```

---

# 13. DOM Manipulation

## Content Change

```js
el.innerText
el.innerHTML
```

## Style Change

```js
el.style.color = "red"
```

---

# 14. Class Manipulation

```js
el.classList.add()
el.classList.remove()
el.classList.toggle()
```

---

# 15. Event Handling

```js
el.addEventListener("click", function(){})
```

## Common Events

* click
* input
* submit

---

# 16. Event Bubbling & Capturing

## Bubbling

Child → Parent

## Capturing

Parent → Child

```js
e.stopPropagation()
```

---

# 17. Event Delegation (Important)

👉 Ek parent pe event laga ke multiple children handle karte hain

---

# 18. Creating Elements

```js
let div = document.createElement("div")
document.body.append(div)
```

---

# 19. setTimeout & setInterval

```js
setTimeout(fn,1000)
setInterval(fn,1000)
```

---

# 20. Callbacks, Promises, Async/Await

## Callback

Function inside function

## Promise

```js
new Promise((res, rej)=>{})
```

## Async/Await

```js
let res = await fetch(url)
```

👉 Cleaner code

---

# 21. Fetch API

```js
fetch(url)
.then(res=>res.json())
```

---

# 22. Local Storage

```js
localStorage.setItem()
localStorage.getItem()
```

---

# 23. Debouncing vs Throttling

* Debounce → last call
* Throttle → limited calls

---

# 24. Equality

```js
== → loose
=== → strict
```

👉 Always use ===

---

# 25. i++ vs ++i

* i++ → pehle use
* ++i → pehle increase

---

# 26. Important Interview Points

* Hoisting clear hona chahiye
* Closures samajhne chahiye
* Async flow strong hona chahiye
* DOM manipulation aana chahiye

---

# 27. Final Cheat Sheet 🔥

* JS single-threaded hai
* Execution context samjho
* Closures = memory
* Promises = async control
* DOM = tree manipulation

---
