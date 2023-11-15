import { Button, Container } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
        <div className="nav" style={{backgroundColor:"#FFF",paddingTop:"22px",paddingBottom:"22px",position:"fixed",width:"100%"}}>
            <Container>
                <div className="" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <img src="../../../public/images/iCard-logo-3 2.png" alt="logo" />
                <div className="" style={{display:"flex", flexWrap:"wrap",gap:"20px",alignItems:"center"}}>
                    <NavLink style={{textDecoration:"none",fontSize:"16px",fontWeight:"400",color:"#282927"}} to="/">Home</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"16px",fontWeight:"400",color:"#282927"}}  to="/">About</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"16px",fontWeight:"400",color:"#282927"}}  to="/">Features</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"16px",fontWeight:"400",color:"#282927"}}  to="/">Testimonial</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"16px",fontWeight:"400",color:"#282927"}}  to="/">Pricing</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"16px",fontWeight:"400",color:"#282927"}}  to="/">Contact </NavLink>
                    <NavLink to="/">
                        <Button style={{backgroundColor:"#14A800",textTransform:"capitalize",color:"#FFF",fontSize:"18px",fontWeight:"600",padding:"10px 20px",borderRadius:"5px"}}>Download the APP</Button>
                        
                         </NavLink>
                </div>
                </div>
            </Container>
        </div>
    </>
    )
}

export default Nav