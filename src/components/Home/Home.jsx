import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import About from '../About/About'
import CTASection from '../CTASection/CTASection'
import Service from '../Service/Service'
import HappyClient from '../../HappyClient/HappyClient'

function Home() {
  return (
    <>
        <div className="home">
            <Nav/>
            <Hero/>
            <About/>
            <CTASection/>
            <Service/>
            <HappyClient/>
        </div>
    </>

    )
}

export default Home