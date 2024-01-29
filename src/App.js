import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import EmojiGame from './components/EmojiGame'
import RockPaperScissorsGame from './components/RockPaperScissorsGame'
import MemoryMatrixGame from './components/MemoryMatrixGame'
import CardFlipMemoryGame from './components/CardFlipMemoryGame'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/emoji-game">Emoji Game</Link>
            </li>
            <li>
              <Link to="/rock-paper-scissors">Rock Paper Scissors</Link>
            </li>
            <li>
              <Link to="/memory-matrix">Memory Matrix</Link>
            </li>
            <li>
              <Link to="/card-flip-memory-game">Card Flip Memory Game</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/emoji-game">
            <EmojiGame />
          </Route>
          <Route path="/rock-paper-scissors">
            <RockPaperScissorsGame />
          </Route>
          <Route path="/memory-matrix">
            <MemoryMatrixGame />
          </Route>
          <Route path="/card-flip-memory-game">
            <CardFlipMemoryGame />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => {
  return <h2>Welcome to the Mini Games Collection!</h2>
}

export default App
