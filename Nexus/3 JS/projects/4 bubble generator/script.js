document.body.addEventListener("click", (event)=>{
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // For random messages
    const messages = ["Hi","Hello","Hey","What's up","Nice!","Cool","Wow!","Boom","Click me!","JS rocks"];
    bubble.textContent = messages[Math.floor(Math.random()*messages.length)];

    const x = event.clientX;
    const y = event.clientY;

    bubble.style.left = `${x-25}px`
    bubble.style.top = `${y-25}px`

    const color = ["red","blue","green","yellow","purple","orange","pink","brown","gray","cyan","magenta","lime","navy"];
    bubble.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    document.body.appendChild(bubble);

    setTimeout(()=> {
        bubble.remove();
    } , 5000)
}) 