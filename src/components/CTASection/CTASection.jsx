import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CTASection() {
    const ctaContainer = {
        background:`
        linear-gradient(90deg, #02DFB2 0.2%, #FBB84D 98.81%)
        `
    }
  return (
    <div style={ctaContainer}>
        <Container>
            <div className="" style={{display:'flex'}}>
                <div className="left" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <p style={{fontSize:"40px", fontWeight:"700",lineHeight:"51px",textTransform:'capitalize'}}>digitalize your business card Save Cost, Save Environment </p>
                    <div className="" style={{display:"flex",gap:"20px"}}>
                        <Link to="/"><img src="/images/Google Play.png" alt="" /></Link>
                        <Link to="/"><img src="/public/images/App Store.png" alt="" /></Link>
                    </div>
                </div>
                <div className="right" style={{height:"100%",display:"flex"}}>
                    <img src="../../../public/images/cta.png" alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CTASection