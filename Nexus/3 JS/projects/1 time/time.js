function watch(){
const timer = document.getElementById('first');  
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;
};

setInterval(watch,1000);

const timer = document.getElementById('first');  
timer.style.fontSize = "200px";
timer.style.display = "flex"; 
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
