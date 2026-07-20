const cells = document.querySelectorAll(".cell");

let currentPlayer = "X";

let xImg = document.getElementById("xImg");
let oImg = document.getElementById("oImg");

let winnerText = document.getElementById("winnerText");
let restartBtn = document.getElementById("restartBtn");

let board = ["","","","","","","","",""];

const winPatterns = [

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];

xImg.classList.add("active");

cells.forEach((cell,index)=>{

cell.addEventListener("click",()=>{

if(cell.innerHTML!=="" || checkWinner()) return;

cell.innerHTML=currentPlayer;

board[index]=currentPlayer;

if(checkWinner()){

winnerText.innerHTML="🏆 Winner is "+currentPlayer;

return;

}

if(!board.includes("")){

winnerText.innerHTML="🤝 Match Draw";

return;

}

if(currentPlayer==="X"){

currentPlayer="O";

xImg.classList.remove("active");

oImg.classList.add("active");

}

else{

currentPlayer="X";

oImg.classList.remove("active");

xImg.classList.add("active");

}

});

});

function checkWinner(){

for(let pattern of winPatterns){

let[a,b,c]=pattern;

if(

board[a]&&

board[a]===board[b]&&

board[a]===board[c]

){

return true;

}

}

return false;

}

restartBtn.addEventListener("click",()=>{

cells.forEach(cell=>{

cell.innerHTML="";

});

board=["","","","","","","","",""];

currentPlayer="X";

winnerText.innerHTML="";

oImg.classList.remove("active");

xImg.classList.add("active");

});