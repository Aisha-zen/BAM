import './App.css'
import Nav from './nav.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Works from './Works.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<home/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Footer' element={<Footer/>}/>


      </Routes>
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer/>


    </>
  )
}

export default App
