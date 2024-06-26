const [...allBtn] = document.querySelectorAll(".btn");
const playground = document.querySelector(".playground");
const winner = document.querySelector(".winner-container #winner");
const winnerContainer = document.querySelector(".winner-container");
const mainContainer = document.querySelector(".main-container");
const playAgain = document.querySelector(".play-again");
const resetBtn = document.querySelector(".reset");

let turnX = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    playGame(btn);
    checkWinner();
  });
});

function playGame(btn) {
  if (turnX) {
    btn.classList.add("cross");
    btn.setAttribute("clicktype", "cross");
    btn.classList.add("disabled");
  } else {
    btn.classList.add("zero");
    btn.setAttribute("clicktype", "zero");
    btn.classList.add("disabled");
  }
  turnX = !turnX;
}

function checkWinner() {
  winningPatterns.forEach((pattern) => {
    let pos1val = allBtn[pattern[0]].getAttribute("clicktype");
    let pos2val = allBtn[pattern[1]].getAttribute("clicktype");
    let pos3val = allBtn[pattern[2]].getAttribute("clicktype");

    if (pos1val != null && pos2val != null && pos3val != null) {
      if (pos1val == pos2val && pos2val == pos3val) {
        playground.classList.add("disabled");
        winner.innerText = `${pos1val}`;
        setTimeout(() => {
          winnerContainer.classList.add("ended");
          mainContainer.classList.add("ended");
        }, 1000);
      }
    }
  });
}

resetBtn.addEventListener("click", () => resetGame());

playAgain.addEventListener("click", () => resetGame());

function resetGame() {
  window.location.reload();
}
