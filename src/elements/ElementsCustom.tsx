"use client"
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import MainImgHeroH from "../../public/image/landingPage/backOfHeroH.png"
export const CusHeroHeader = styled(Box)({
    backgroundImage: `url(${MainImgHeroH.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    width: "100vw",
    height: "100%" , 
})
export const CusNavBar = styled(Box)({
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor : 'var(--primary-color)' ,  
    display: 'block',
    padding: '1.5rem 0',
    zIndex: 1000, 
    // boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
})
