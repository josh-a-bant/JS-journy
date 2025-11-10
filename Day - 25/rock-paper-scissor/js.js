const choices = ["rock", "paper", "scissor"];

const computerChoose = document.getElementById("computer-choose");
const playerChoose = document.getElementById("player-choose");
const result = document.getElementById("result");

function play(playerChoice) {
  const random = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[random];
  playerChoose.textContent = playerChoice;
  computerChoose.textContent = computerChoice;

  if (playerChoice == computerChoice) {
    result.textContent = "Tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result.textContent =
          computerChoice == "scissor" ? "You Win" : "You Loose";
        break;
      case "paper":
        result.textContent = computerChoice == "rock" ? "You Win" : "You Loose";
        break;
      case "scissor":
        result.textContent =
          computerChoice == "paper" ? "You Win" : "You Loose";
        break;
    }
  }

  result.classList.remove("red", "green");

  switch (result.textContent) {
    case "You Win":
      result.classList.add("green");
      break;
    case "You Loose":
      result.classList.add("red");
      break;
  }
}
