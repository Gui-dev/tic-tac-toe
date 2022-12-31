import { Container } from "./App"
import { GlobalStyle } from "./styles/global"

function App () {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="board-game">
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
      </Container>
    </>
  )
}

export default App
