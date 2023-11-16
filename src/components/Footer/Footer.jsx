import { Button, Container } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


import './Footer.css'

function Footer() {
    const footer = {
        background: `linear-gradient(91deg, #2CBE65 -19.13%, #0E7C72 141.02%)`,
        padding: `5% 0%`,
    };

    return (
        <>
            <div className="" style={footer}>
                <Container>
                    <div className="">
                        <div className="" style={{display:"flex",justifyContent:"space-between",paddingBottom:"3%",borderBottom:"1px solid #FFF"}}>
                            <div className="" style={{width:'30%'}}>
                                <img src="../../../public/images/iCardWhiteLogo.png" alt="" />
                                <p style={{color:"#FFF", fontSize:"20px", lineHeight:"32px",fontWeight:"400"}}>+880 1308 042284</p>
                                <p style={{color:"#FFF", fontSize:"16px", lineHeight:"32px",fontWeight:"400"}}>officials@incrementsinc.com</p>
                            </div>
                            <div className="" style={{width:'30%'}}>
                                <p style={{color:"#FFF", fontSize:"18px", lineHeight:"28px",fontWeight:"400"}}>Quick Links</p>
                                <div className="" style={{display:"grid",gridTemplateColumns:"auto auto",justifyContent:'space-between',opacity:"65%"}}>
                                    <Link style={{color:"#FFF", fontSize:"16px",fontWeight:"400",textDecoration:"none"}} to="/">About</Link>
                                    <Link style={{color:"#FFF", fontSize:"16px",fontWeight:"400",textDecoration:"none"}} to="/">Testimonial </Link>
                                    <Link style={{color:"#FFF", fontSize:"16px",fontWeight:"400",textDecoration:"none",marginTop:"20px"}} to="/">Features </Link>
                                    <Link style={{color:"#FFF", fontSize:"16px",fontWeight:"400",textDecoration:"none",marginTop:"20px"}} to="/">Pricing </Link>
                                </div>

                            </div>
                            <div className="" style={{width:"30%", right:"auto"}}> 
                                <p style={{color:"#FFF", fontSize:"18px", lineHeight:"28px",fontWeight:"400"}}>Subscribe</p>
                                <div className="" style={{display:'flex',position:"relative",alignItems:"center"}}>
                                    <input type="text"  placeholder='Get product updates' style={{height:"50px",borderRadius:"25px",border:"none",outline:"none",width:'100%',paddingLeft:"20px"}}/>
                                    <div className='arrowBtn' ><ArrowForwardIcon/></div>
                                </div>

                            </div>
                        </div>
                        <div className="" style={{display:"flex",alignItems:'center',justifyContent:"space-between",marginTop:"3%"}}>
                            <div className="" style={{display:"flex",alignItems:'center',gap:"20px",fontSize:"25px", color:"#FFF"}}>
                                <FaFacebookF style={{padding:"10px", borderRadius:"50%", border:"1px solid #FFF"}}/>
                                <FaLinkedinIn style={{padding:"10px", borderRadius:"50%", border:"1px solid #FFF"}}/>
                                <FaTwitter style={{padding:"10px", borderRadius:"50%", border:"1px solid #FFF"}}/>
                            </div>
                            <div className="" style={{display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column"}}>
                                <p style={{color:"#FFF", fontSize:"16px",fontWeight:"400",marginBlockEnd:"0em"}}>A product of </p>
                                <img src="../../../public/images/incriment.png" alt="" />
                            </div>
                            <div className="" style={{display:"flex", alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#FFF"}}>
                                <p >© 2023 Increments Inc. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer