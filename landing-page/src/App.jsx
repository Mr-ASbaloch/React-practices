

import './App.css'
import Interior from './components/Interior'
import Hero from './components/Hero.jsx'
import Furniture from './components/Furniture.jsx'
import Design from './components/Design.jsx'
import Blog from './components/Blog'
import About from './components/About'

function App() {
 

  return (
    <>
     
     <h1 className="text-3xl font-bold underline text-center">
      Hello world! welcome to us
      
    </h1>
    <Hero/>
    <Furniture/>
    <Design/>
    <Interior/>
    <Blog/>
    <About/>
    </>
  )
}

export default App
