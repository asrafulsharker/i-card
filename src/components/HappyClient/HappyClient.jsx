import { Container } from '@mui/material'
import React from 'react'
import Slider from '../Slider/Slider'

function HappyClient() {
    const happyClient={
        background:`
            linear-gradient(86deg, #0E7C72 -17.41%, #2CBE65 110.89%)
        `,
        height:`
            100vh
        `,
        padding:   `10% 0%`

    }
  return (
        <>
        <div className="" style={happyClient}>
            <Container>
                <div className="" style={{display:"flex", flexDirection:"column",justifyContent:"center",height:"100vh"}}>
                   <div className="" style={{width:"50%"}}>
                   <p style={{fontSize:"17px",fontWeight:"400",opacity:"75%",color:"#FFF",marginBlockStart:"0em"}}>Unveiling the iCards Experience Through User Perspectives</p>
                    <p style={{fontSize:"40px", fontWeight:"700",color:"#FFF",lineHeight:"51px",letterSpacing:"-2px",textTransform:"capitalize"}}>The Voice of Our Users. Why iCards Stands Out</p>
                   </div>

                   <Slider/>
                </div>
            </Container>
        </div>
        </>
    )
}

export default HappyClient