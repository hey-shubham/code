let cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

let xImg = document.getElementById("xImg");
let oImg = document.getElementById("oImg");
let winnerText = document.getElementById("winnerText");
let restartBtn = document.getElementById("restartBtn");

let board = ["", "", "", "", "", "", "", "", ""];

// Winning patterns
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

// Initial active player
xImg.classList.add("active");

// Cell click
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {

    if (cell.innerText !== "" || checkWinner()) return;

    cell.innerText = currentPlayer;
    board[index] = currentPlayer;

    // Winner check
    if (checkWinner()) {
      winnerText.innerText = "Winner is " + currentPlayer + " 🏆";
      return;
    }

    // 🔥 Draw check
    if (!board.includes("")) {
      winnerText.innerText = "Match Draw 🤝";
      return;
    }

    // Switch turn
    if (currentPlayer === "X") {
      currentPlayer = "O";
      xImg.classList.remove("active");
      oImg.classList.add("active");
    } else {
      currentPlayer = "X";
      oImg.classList.remove("active");
      xImg.classList.add("active");
    }

  });
});

// Winner function
function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return true;
    }
  }
  return false;
}

// Restart game
restartBtn.addEventListener("click", () => {
  cells.forEach(cell => cell.innerText = "");
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  winnerText.innerText = "";

  oImg.classList.remove("active");
  xImg.classList.add("active");
});