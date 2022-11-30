const choices = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors',
}

function getComputerChoice() {
  return choices[Math.ceil(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  const pSel = playerSelection.toLowerCase()
  const cSel = computerSelection.toLowerCase()
  if (pSel == cSel) {
    return 'Draw'
  } else if (
    (pSel == 'rock' && cSel == 'scissors')
    || (pSel == 'paper' && cSel == 'rock')
    || (pSel == 'scissors' && cSel == 'paper')
  ) {
    return 'You win'
  } else {
    return 'You lose'
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt()
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection, computerSelection)
    console.log(`${playerSelection} vs ${computerSelection}: ${result}`)
  }
}

game()
