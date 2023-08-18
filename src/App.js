import React from 'react'
import Header from'./Components/header/Header.jsx';
import Nav from './Components/nav/Nav.js';
import About from './Components/about/About.jsx'
import Portfolio from './Components/portfolio/Portfolio.js';
import Footer from './Components/footer/Footer.jsx';
import Experience from './Components/experience/Experience.jsx';
import Contact from './Components/contact/Contact.jsx'
const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
     <Experience/>
  
     <Portfolio/>
    
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
