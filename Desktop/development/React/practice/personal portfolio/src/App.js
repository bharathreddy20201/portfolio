import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Intro from './Components/intro/Intro'
import Services from './Components/services/Services'
import Experiance from './Components/Experiance/Experiance'
import Works from './Components/works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'
import {themeContext} from './Context'
import { useContext } from 'react'

function App() {
  const theme= useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App'
  style={{
      background : darkMode? 'black':'', color : darkMode? 'white' : ''
    }}  >
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
       
    </div>
  )
}

export default App