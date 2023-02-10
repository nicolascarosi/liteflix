import { Header } from 'layout'
import { Home } from 'pages'
import { FontStyles } from 'theme'
import GlobalStyles from 'theme/GlobalStyles'

function App() {
  return (
    <>
      <FontStyles />
      <GlobalStyles />
      <Header />
      <Home />
    </>
  )
}

export default App
