
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
function App() {
  
  return (

    <div className='app'>

      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </div>


  )
}

export default App
