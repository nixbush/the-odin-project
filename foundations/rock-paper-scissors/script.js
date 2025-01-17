const playerScore = document.querySelector("#player-score");
const aiScore = document.querySelector("#ai-score");

const playerButtons = document.querySelector("#choice");
playerButtons.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const playerChoice = e.target.id;
  const aiChoice = getAIChoice();
  play(playerChoice, aiChoice);
});

function getAIChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(player, ai) {
  if (player === ai) {
    console.log("A tie!");
    updateStatus(0);
    return;
  }

  if (
    (player === "rock" && ai === "scissors") ||
    (player === "paper" && ai === "rock") ||
    (player === "scissors" && ai === "paper")
  ) {
    console.log("Player has won!");
    updateStatus(1);
    return;
  } else {
    console.log("AI has won!");
    updateStatus(-1);
    return;
  }
}

var statusTimer;
function updateStatus(result) {
  const state = document.querySelector("#state");
  state.style.display = "block";

  // A tie
  if (result === 0) {
    state.textContent = "It is a tie!";
    state.style.color = "var(--tie)";
  } else if (result < 0) {
    state.textContent = "You have lost!";
    state.style.color = "var(--red)";
    aiScore.textContent = +aiScore.textContent + 1;
  } else {
    state.textContent = "You win!";
    state.style.color = "var(--green)";
    playerScore.textContent = +playerScore.textContent + 1;
  }

  // Timer
  if (statusTimer) {
    clearTimeout(statusTimer);
  }
  statusTimer = setTimeout(() => {
    state.style.display = "none";
  }, 2000);
}
