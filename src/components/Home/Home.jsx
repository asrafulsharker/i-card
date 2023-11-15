import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import About from '../About/About'
import CTASection from '../CTASection/CTASection'

function Home() {
  return (
    <>
        <div className="home">
            <Nav/>
            <Hero/>
            <About/>
            <CTASection/>
        </div>
    </>

    )
}

export default Home