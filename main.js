const choices = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors',
}

function getComputerChoice() {
  const choice = choices[Math.ceil(Math.random() * 3)]
  document.getElementById('computer-choice').innerText = choice
  document.getElementById('timestamp').innerText = new Date().toLocaleTimeString()
  return choice
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

function reset() {
  document.getElementById('outcome').innerText = ''
  document.getElementById('timestamp').innerText = ''
  document.getElementById('p1-score').innerText = 0
  document.getElementById('cpu-score').innerText = 0
}

function playerThrow(choice) {
  const outcome = playRound(choice, getComputerChoice())
  const color = outcome == 'Draw'
    ? 'yellow'
    : outcome == 'You win'
    ? 'green'
    : 'red'

  document.getElementById('outcome').innerText = outcome
  document.getElementById('outcome').style.color = color

  const p1ScoreEl = document.getElementById('p1-score')
  const cpuScoreEl = document.getElementById('cpu-score')
  let p1Score, cpuScore

  if (outcome == 'You win') {
    p1Score = parseInt(p1ScoreEl.innerText)
    p1Score++
    p1ScoreEl.innerText = p1Score
  }
  if (outcome == 'You lose') {
    cpuScore = parseInt(cpuScoreEl.innerText)
    cpuScore++
    cpuScoreEl.innerText = cpuScore
  }

  if ([p1Score, cpuScore].includes(5)) {
    alert(`${p1Score == 5 ? 'You' : 'The computer'} reached 5 wins!
Press okay to reset.`)
    reset()
  }
}
