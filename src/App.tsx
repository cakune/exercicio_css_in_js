import Header from './containers/Cabecalho'
import Hero from './containers/Hero'
import ListaVagas from './components/ListaVagas'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
