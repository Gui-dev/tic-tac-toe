import { useEffect, useState } from "react"

import { Container } from "./styles/style"
import { GlobalStyle } from "./styles/global"

function App () {
  const winningCombinations = [
    //Horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [play, setPlay] = useState(1)
  const [playWinning, setPlayWinning] = useState(null)

  useEffect(() => {
    checkWinner()
  }, [gameData])

  const handleClickOnBoard = (indexValue: number) => {
    if (gameData[indexValue] !== 0) return
    setGameData(prev => {
      const newGameData = [...gameData]
      newGameData[indexValue] = play
      return newGameData
    })
    setPlay(prev => prev === 1 ? 2 : 1)
  }

  const checkWinner = async () => {
    let winner = null
    for (let values of winningCombinations) {
      if (
        gameData[values[0]] === 1 &&
        gameData[values[1]] === 1 &&
        gameData[values[2]] === 1
      ) {
        winner = 'play 1 venceu'
      }

      if (
        gameData[values[0]] === 2 &&
        gameData[values[1]] === 2 &&
        gameData[values[2]] === 2
      ) {
        winner = 'play 2 venceu'
      }
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
              <span key={String(index)} onClick={() => handleClickOnBoard(index)}>
                {value === 0 ? '' : value === 1 ? 'X' : 'O'}
              </span>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default App
