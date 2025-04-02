import './App.scss'
import './custom.scss'
import { HeroSection } from './components/HeroSection'
import { Container } from 'react-bootstrap'
import { Header } from './components/Header';
import { useState } from 'react';

function App() {
  
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="App">
      <Container>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <HeroSection />
      </Container>
    </div>
  )
}

export default App
