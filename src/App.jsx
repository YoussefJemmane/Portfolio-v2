import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About/>
        <Skills/>
      </main>
    </>
  )
}

export default App
