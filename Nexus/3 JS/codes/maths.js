// new Number() constructor is used to create a number object. 
let num1=20;
let num2=new Number(50);
console.log(num2);
console.log(num1+num2);

// toFixed() method is used to round the number to the specified decimal places.
let num3=100.581;
console.log(num3.toFixed(1));

// toPrecision() method is used to round the number to the specified significant digits.
let num4=100.581;
console.log(num4.toPrecision(3));

// floor() method is used to round the number down to the nearest integer.
let num6=10.9;
console.log(Math.floor(num6));

// ceil() method is used to round the number up to the nearest integer.
let num7=10.1;
console.log(Math.ceil(num7)); 

// Math.random() method is used to generate a random number between 0 and 1.
let num5=(Math.random()*10)
console.log(Math.floor(num5));

// For generating random number between 1 and 10
let num8=Math.floor(Math.random()*10+7);
console.log(num8);

// Ludo (random 1-6)        
let Dice=Math.floor(Math.random()*6)+1;
console.log("Your Dice no is : ",Dice);

// Ludo(2nd type)
let Dice1=Math.floor(Math.random()*(6-1+1)+1);
console.log("Your Dice no is : ",Dice1);

// 30-40(max-min+1(+min))
let num9=Math.floor(Math.random()*(40-30+1)+30);
console.log(num9);