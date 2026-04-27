const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

//  event bubbling and event capturing

child.addEventListener('click',(event)=>{
    console.log(event.target);
},false)

parent.addEventListener('click',(event)=>{
    console.log(event.target);
},false)

grandParent.addEventListener('click',(event)=>{
    console.log(event.target);
},false)

// addEventListner(first_event, callback, capture) 