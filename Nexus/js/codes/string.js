console.clear();

// string ko ham 3 tariko se define kr skte hai.
// 1. double quotes("")
// 2. single quotes('')
// 3. backticks(``)

let str1="Hello, World!!..";
let str2='Hello, World!!..';
let str3=`Hello, World!!..`;
console.log(str1);
console.log(str2);
console.log(str3);

// toString() method
let num3=100;
console.log(num3.toString());

// backticks ke andar ham variable ko as a value use kr skte hai.
// isse ham string interpolation kehte hai.
// string interpolation ka matlab hai ki string ke andar variable ki value ko directly use krna.
let price=100;
console.log(`price of product is : ${price}`);

// concatination of string
let string1="con";
let string2="catination";
let string3=string1+string2;

console.log(string1+string2);
console.log(string1.length);
console.log(string2.length);
console.log(string3.length);

// line break in string
let str4="Java\nscript";
console.log(str4);

// escape character
let str5="escape character use krne ke liye ham \\ka use krte hai.";
console.log(str5);

// accessing character in string
let str6="shubham's laptop";
console.log(str6[6]);
console.log(str6.charAt(6));

// string to upper case
let str7="hello world";
console.log(str7.toUpperCase());

// string to lower case
let str8="HELLO WORLD";
console.log(str8.toLowerCase());

// trim() method
let str9="   hello world   ";
console.log(str9.trim());

// slice() method
let str10="javascript programming"; 
console.log(str10.slice(0,10));
console.log(str10.slice(11));

// replace() method
let str11="hello world world";
console.log(str11.replace("world","javascript"));
console.log(str11.replaceAll("world","javascript"));

// includes() method
let str12="hello world";
console.log(str12.includes("world"));
console.log(str12.includes("javascript"));

// split() method
let str13="apple,banana,grape,orange";
console.log(str13.split(","));

//repeat() method
let str14="ha ";
console.log(str14.repeat(5));

// new waay to create string using String() constructor
let str15=new String("hello world");
console.log(str15);
console.log(typeof str15);