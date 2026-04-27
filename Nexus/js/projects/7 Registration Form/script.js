// const form = document.getElementById('container');

// for background random color
function getRandomGradient() {
    const colors = ["#ff9a9e", "#fad0c4", "#a18cd1", "#fbc2eb", "#84fab0", "#8fd3f4"];
    
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    
    return `linear-gradient(45deg, ${color1}, ${color2})`;
}

setInterval(() => {
    document.body.style.background = getRandomGradient();
}, 1000);