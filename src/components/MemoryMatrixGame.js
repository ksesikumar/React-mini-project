// src/components/MemoryMatrixGame.js
import React, {useState, useEffect} from 'react'
import MemoryMatrixRules from './MemoryMatrixRules'

const MemoryMatrixGame = () => {
  const [showRules, setShowRules] = useState(false)
  const [matrix, setMatrix] = useState([])
  const [targetCell, setTargetCell] = useState(null)
  const [score, setScore] = useState(0)

  const generateRandomMatrix = () => {
    const matrixSize = 4
    const newMatrix = Array.from({length: matrixSize}, () =>
      Array.from({length: matrixSize}, () => Math.floor(Math.random() * 9) + 1),
    )
    setMatrix(newMatrix)
    setTargetCell({
      row: Math.floor(Math.random() * matrixSize),
      col: Math.floor(Math.random() * matrixSize),
    })
  }

  useEffect(() => {
    generateRandomMatrix()
  }, [])

  const handleRulesClick = () => {
    setShowRules(true)
  }

  const handleCloseRules = () => {
    setShowRules(false)
  }

  const handleCellClick = (row, col) => {
    if (row === targetCell.row && col === targetCell.col) {
      // Correct guess, increase the score
      setScore(prevScore => prevScore + 1)
    } else {
      // Incorrect guess, decrease the score
      setScore(prevScore => Math.max(0, prevScore - 1))
    }
    generateRandomMatrix()
  }

  return (
    <div>
      <h2>Memory Matrix Game</h2>
      <p>Score: {score}</p>
      <button onClick={handleRulesClick}>Rules</button>
      {showRules && <MemoryMatrixRules onClose={handleCloseRules} />}
      <div>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{display: 'flex'}}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                style={{
                  width: '50px',
                  height: '50px',
                  border: '1px solid #000',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor:
                    rowIndex === targetCell.row && colIndex === targetCell.col
                      ? '#ccc'
                      : '#fff',
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemoryMatrixGame
