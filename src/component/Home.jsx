import React from 'react'
import Footer from './Footer'
import About from './About'
import Skills from './Skills'

function Home() {
  return (
    <section className='home'>
      <About />
      <Skills />
      <Footer />
    </section>
  )
}

export default Home
