// shortest method and highly optimised

const root = document.getElementById('root');

// colors array
const colors = [
  "red","blue","orange","green","purple",
  "pink","brown","white","gray","cyan",
  "magenta","lime","teal","navy","maroon",
  "olive","gold","coral","indigo","violet","tan"
];

// buttons create ho rha hai
colors.forEach(color => {
  const btn = document.createElement("button");
  btn.id = color;
  btn.style.backgroundColor = color;
  root.appendChild(btn);
});


root.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
})



// -------------------*****----------------------------

// short method but not optimised
// const body = document.querySelector('body');
// const buttons = document.querySelectorAll('button');

// buttons.forEach((element) => {
//     element.addEventListener('click',()=>{
//         body.style.backgroundColor = element.id;
//     })
// });

// -------------------*****----------------------------


// const body = document.querySelector('body');

// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');  

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })