function attach (content){

// access to first list
const element = document.createElement('li');
element.innerHTML = content;

const parent = document.getElementById("root");
parent.appendChild(element);
};

attach("TypeScript");
attach("React");

// access to second list
// const parent2 = document.getElementById("root");
// parent2.Children[1].setAttributeNode(element);  

// start me element add krne ke liye
const parent3 = document.getElementById("root");
const element3 = document.createElement('li');
element3.innerHTML = "TS";

parent3.prepend(element3);