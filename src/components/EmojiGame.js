// src/components/EmojiGame.js
import React, {useState, useEffect} from 'react'
import EmojiGameRules from './EmojiGameRules'

const EmojiGame = () => {
  const [showRules, setShowRules] = useState(false)
  const [emojis, setEmojis] = useState([])
  const [targetEmojiIndex, setTargetEmojiIndex] = useState(null)
  const [score, setScore] = useState(0)

  const generateRandomEmojis = () => {
    const emojiList = [
      '😀',
      '😍',
      '🚀',
      '🌈',
      '🍎',
      '🎉',
      '🐱',
      '🌸',
      '🌍',
      '🎸',
    ]
    const shuffledEmojis = emojiList.sort(() => Math.random() - 0.5)
    setEmojis(shuffledEmojis)
    setTargetEmojiIndex(Math.floor(Math.random() * emojiList.length))
  }

  useEffect(() => {
    generateRandomEmojis()
  }, [])

  const handleRulesClick = () => {
    setShowRules(true)
  }

  const handleCloseRules = () => {
    setShowRules(false)
  }

  const handleEmojiClick = index => {
    if (index === targetEmojiIndex) {
      // Correct guess, increase the score
      setScore(prevScore => prevScore + 1)
    } else {
      // Incorrect guess, decrease the score
      setScore(prevScore => Math.max(0, prevScore - 1))
    }
    generateRandomEmojis()
  }

  return (
    <div>
      <h2>Emoji Game</h2>
      <p>Score: {score}</p>
      <button onClick={handleRulesClick}>Rules</button>
      {showRules && <EmojiGameRules onClose={handleCloseRules} />}
      <div>
        {emojis.map((emoji, index) => (
          <button key={index} onClick={() => handleEmojiClick(index)}>
            {emoji}
          </button>
        ))}
      </div>
    </div>
  )
}

export default EmojiGame
