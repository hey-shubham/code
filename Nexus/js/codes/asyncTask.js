console.clear();

console.log("Hello Coder Army");

function meet(){
    const arr = [2,4,6];
    console.log(arr[0]);
}

// pehle ye call hoga qki last me maine isey hi call kar rkkha hai
function greet(){
    const a = 2 + 3;
    console.log(a);
    // ab meet call hoga 
    meet();
    // tab ye execute hogi
    console.log(a*a);
}

greet();
console.log("Program End");