import React, {useState, useEffect} from 'react'
import CardFlipMemoryGameRules from './CardFlipMemoryGameRules'

const CardFlipMemoryGame = () => {
  const [showRules, setShowRules] = useState(false)
  const [cards, setCards] = useState([])
  const [flippedIndexes, setFlippedIndexes] = useState([])
  const [score, setScore] = useState(0)

  const generateRandomCards = () => {
    const cardList = ['🐱', '🐶', '🐰', '🦊', '🐻', '🐼', '🦁', '🐯']
    const duplicatedCards = [...cardList, ...cardList]
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }

  useEffect(() => {
    generateRandomCards()
  }, [])

  const handleRulesClick = () => {
    setShowRules(true)
  }

  const handleCloseRules = () => {
    setShowRules(false)
  }

  const handleCardClick = index => {
    if (flippedIndexes.length === 2) {
      // Two cards already flipped, reset them
      setFlippedIndexes([])
      return
    }

    // If the selected card is already flipped, do nothing
    if (flippedIndexes.includes(index)) {
      return
    }

    // Flip the selected card
    setFlippedIndexes(prevIndexes => [...prevIndexes, index])

    // Check if two cards are flipped
    if (flippedIndexes.length === 1) {
      const [firstIndex, secondIndex] = flippedIndexes

      // Check if the two flipped cards match
      if (cards[firstIndex] === cards[index]) {
        // Correct match, increase the score
        setScore(prevScore => prevScore + 1)
      } else {
        // Incorrect match, decrease the score
        setScore(prevScore => Math.max(0, prevScore - 1))
      }
    }
  }

  return (
    <div>
      <h2>Card Flip Memory Game</h2>
      <p>Score: {score}</p>
      <button onClick={handleRulesClick}>Rules</button>
      {showRules && <CardFlipMemoryGameRules onClose={handleCloseRules} />}
      <div>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid #000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: flippedIndexes.includes(index) ? '#ccc' : '#fff',
            }}
          >
            {flippedIndexes.includes(index) ? card : '❓'}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardFlipMemoryGame
