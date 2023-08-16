

import './App.css'
import Achievement from './Components/Achievement'
import Calendar from './Components/Calendar'
import Clients from './Components/Clients'
import Community from './Components/Community'
import Demo from './Components/Demo'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Unlock from './Components/Unlock'


function App() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clients/>
    <Community/>
    <Unlock/>
    <Achievement/>
   <Slider/>
  
    <Calendar/>
    <Demo/>
    <Footer/>
    </>
  )
}

export default App
