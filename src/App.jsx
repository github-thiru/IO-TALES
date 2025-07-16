import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Pinklorems from './components/'
import PinkLoremPage from './components/PinkLoremPage.jsx'
import OrangeAppUI from './components/OrangeAppUI.jsx'
import AboutIJoTales from './components/AboutIJoTales.jsx'
import Headingpage from './components/Headingpage.jsx'
import Contentcards from './components/Contentcards.jsx'
import Footer from './components/Footer.jsx'
import ScrollingBanner from './components/ScrollingBanner.jsx'
const App = () => {
  return (
    <>
    <ScrollingBanner/>
    <Navbar/>
    <Hero/>
   <PinkLoremPage/>
   <OrangeAppUI/>
   <AboutIJoTales/>
  <Headingpage/>
  <Contentcards/>
<Footer />
    </>
  )
}

export default App

