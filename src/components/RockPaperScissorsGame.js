// src/components/RockPaperScissorsGame.js
import React, {useState} from 'react'
import RockPaperScissorsRules from './RockPaperScissorsRules'

const RockPaperScissorsGame = () => {
  const [showRules, setShowRules] = useState(false)
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [score, setScore] = useState(0)

  const choices = ['rock', 'paper', 'scissors']

  const handleRulesClick = () => {
    setShowRules(true)
  }

  const handleCloseRules = () => {
    setShowRules(false)
  }

  const handleUserChoice = choice => {
    setUserChoice(choice)

    const randomIndex = Math.floor(Math.random() * choices.length)
    setComputerChoice(choices[randomIndex])

    if (choice === 'rock' && computerChoice === 'scissors') {
      setScore(prevScore => prevScore + 1)
    } else if (choice === 'paper' && computerChoice === 'rock') {
      setScore(prevScore => prevScore + 1)
    } else if (choice === 'scissors' && computerChoice === 'paper') {
      setScore(prevScore => prevScore + 1)
    } else if (choice === computerChoice) {
      // It's a tie - no change in score
    } else {
      setScore(prevScore => Math.max(0, prevScore - 1))
    }
  }

  return (
    <div>
      <h2>Rock Paper Scissors Game</h2>
      <p>Score: {score}</p>
      <button onClick={handleRulesClick}>Rules</button>
      {showRules && <RockPaperScissorsRules onClose={handleCloseRules} />}
      <div>
        {choices.map(choice => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <p>User Choice: {userChoice}</p>
      <p>Computer Choice: {computerChoice}</p>
    </div>
  )
}

export default RockPaperScissorsGame
