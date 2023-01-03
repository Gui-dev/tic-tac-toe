import { useEffect, useState } from "react"

import { Container } from "./styles/style"
import { GlobalStyle } from "./styles/global"

function App () {
  const winningCombinations = [
    //Horizontals
    { indexes: [0, 1, 2], orientation: 'horizontal' },
    { indexes: [3, 4, 5], orientation: 'horizontal' },
    { indexes: [6, 7, 8], orientation: 'horizontal' },
    //Verticals
    { indexes: [0, 3, 6], orientation: 'vertical' },
    { indexes: [1, 4, 7], orientation: 'vertical' },
    { indexes: [2, 5, 8], orientation: 'vertical' },
    //Diagonals
    { indexes: [0, 4, 8], orientation: 'diagonal-1' },
    { indexes: [2, 4, 6], orientation: 'diagonal-2' }
  ]
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [play, setPlay] = useState(1)
  const [winningCombo, setWinningCombo] = useState<{ indexes: number[], orientation: string } | null>(null)

  useEffect(() => {
    checkWinner()
    checkGameEnded()
  }, [gameData])

  useEffect(() => {
    if (winningCombo) {
      alert('O jogo teve um vencendor')
    }
  }, [winningCombo])

  const handleClickOnBoard = (indexValue: number) => {
    if (gameData[indexValue] !== 0) return
    if (winningCombo) return
    setGameData(prev => {
      const newGameData = [...gameData]
      newGameData[indexValue] = play
      return newGameData
    })
    setPlay(prev => prev === 1 ? 2 : 1)
  }

  const checkWinner = () => {
    let winner = null
    for (let values of winningCombinations) {
      if (
        gameData[values.indexes[0]] === 1 &&
        gameData[values.indexes[1]] === 1 &&
        gameData[values.indexes[2]] === 1
      ) {
        winner = 'play 1 venceu'
      }

      if (
        gameData[values.indexes[0]] === 2 &&
        gameData[values.indexes[1]] === 2 &&
        gameData[values.indexes[2]] === 2
      ) {
        winner = 'play 2 venceu'
      }

      if (winner) {
        setWinningCombo(values)
        break;
      }
    }
  }

  const checkGameEnded = () => {
    if (gameData.every(item => item !== 0)) {
      alert('O jogo não teve um vencendor, deu velha')
    }
  }


  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Jogo da Velha</h1>
        <div className="board-game">
          {gameData.map((value, index) => {
            return (
              <span
                className={
                  `${winningCombo?.indexes.includes(index) && winningCombo.orientation}`
                }
                key={String(index)}
                onClick={() => handleClickOnBoard(index)}
              >
                {value === 0 && ''}
                {value === 1 && 'X'}
                {value === 2 && 'O'}
              </span>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default App
