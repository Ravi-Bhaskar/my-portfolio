import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Certificate from '../components/Certificate/Certificate'

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
