import { createGlobalStyle } from 'styled-components'
import Background from './Background'
import Main from './Main'
import PlayButton from './PlayButton'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Source Sans Pro";
    font-weight: 300;
    background-color: #191919;
  }
  a {
    color: #68baff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Main />
      <PlayButton />
    </>
  )
}

export default App
