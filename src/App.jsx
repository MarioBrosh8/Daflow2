import './App.scss'
import { HeroSection } from './components/HeroSection'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <div className="App">
      <Container>
        <HeroSection />
      </Container>
    </div>
  )
}

export default App
