"use client"
import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import MainImgHeroH from "../../public/image/landingPage/backOfHeroH.png"
import MainBackImgMemeberShip from "../../public/image/landingPage/memberShip/mainBackG.png"
import rightSideFormMemberShip from "../../public/image/landingPage/memberShip/rightSideForm.png"
import MainBackImgPointOfView from '../../public/image/landingPage/PointOfView/backOfPointOfView.png'
import MainBackBoxDetails from '../../public/image/landingPage/BoxDetails/backOfBox.jpg'
import MainBackImgFooter from '../../public/image/landingPage/backOfFooter.jpg'
export const CusHeroHeader = styled(Box)({
    backgroundImage: `url(${MainImgHeroH.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    width: "100vw",


})
export const CusNavBar = styled(Box)({
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'var(--primary-color)',
    display: 'block',
    padding: '1.5rem 0',
    zIndex: 1000,
    // boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
})
export const MemberShipWrapper = styled(Box)({
    backgroundImage: `url(${MainBackImgMemeberShip.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: "4rem",
})
export const CusInputAdornmentMemberShip = styled(InputAdornment)({
    backgroundColor: "var(--primary-color)",
    width: '100px',
    padding: '1.5rem',
    borderTopLeftRadius: "2rem",
    borderBottomLeftRadius: "2rem"
})
export const CusTextFeildMemeberShipEmail = styled(TextField)({
    border: '1px  solid  #ccc',
    borderRadius: '2rem',
    width: '100%',
    paddingRight: ' 1rem',
    paddingY: '0.09rem'
})
export const MemberShipFormWrapper = styled(Box)({
    boxShadow: "-2px 1px 35px -15px rgba(0,0,0,0.75)",
    backgroundColor: "var(--white-color)",
    zIndex: 99,
    display: "block", position: 'relative'
    // height: '600px',

    // overflow: "hidden"
})
export const CusRightSideForm = styled(Box)({
    backgroundImage: `url(${rightSideFormMemberShip.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: '3rem',

    display: "block",
    color: 'var(--white-color)',
    height: "100%",
    width: '100%',
    zIndex: 0,

    "&:after": {
        content: `""`,
        position: "absolute",
        top: 0,
        right: 0,
        background: "linear-gradient(to top, rgba(72, 79, 227, .8) 0%, rgba(66, 70, 167, .8) 99%)",
        display: "block",
        width: "100%",
        height: "100%",
        zIndex: -1
    }
})
export const WrapperPointOfView = styled(Box)({
    backgroundImage: `url(${MainBackImgPointOfView.src})`,
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "right",
    marginTop: "5rem ",
})
export const PointOfViewCardWrapper = styled(Box)({
    position: 'relative',
    marginTop: '5rem ',
    cursor: "pointer",
    display: 'flex',
    boxShadow: "var(--primary-shadow)",
    flexDirection: "column",
    justifyContent: 'center',
    padding: '2rem',

    backgroundColor: "var(--white-color)",
    height: "400px",
    "&:after": {
        content: `""`,
        position: 'absolute',
        display: 'block',
        height: "100% ",
        width: "5px",
        top: 0,
        right: 0,
        backgroundColor: "var(--primary-color)",

    }
})
export const PointOfviewCardProfile = styled(Box)({

    position: "absolute",
    top: -80,
    display: 'block',
    border: "3px  solid  var(--white-color)",
    borderRadius: "50%", left: 10,
    boxShadow: "var(--primary-shadow)",

})
export const CusTeamMemberCard = styled(Box)({
    cursor: "pointer",
    overflow: 'hidden',
    position: 'relative',
    ":hover .overlay": {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1
    }

})
export const CusTeamMemberCardOverLay = styled(Box)({

    cursor: "pointer",
    position: "absolute",
    top: "50%",
    padding: "0  4rem",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: '90%',
    borderRadius: "1rem",
    height: '90%',
    backgroundColor: 'var(--primary-color)',
    color: "var(--white-color)",
    opacity: 0,
    transformOrigin: 'center',
    transform: "translate(-50% ,  -50%) scale(0)",
    transition: "transform 0.4s ease-in-out, opacity 0.3s ease-in-out",
    zIndex: 2
})
export const OverLaySocialMediaWrapper = styled(Box)({
    borderTop: "1px solid  var(--white-color)",
    width: "100%",
    display: "flex",
    justifyContent: "center",

})
export const LatestBlogCardDate = styled(Box)({

    position: 'absolute',
    backgroundColor: "var(--white-color)",
    top: "-20px",
    padding: '0.75rem',
    borderRadius: "1rem",
    boxShadow: "var(--primary-shadow)",
    right: 20,


})

export const CusCounterDetails = styled(Box)({

    backgroundImage: `url(${MainBackBoxDetails.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: "5rem  0",
    margin: "5rem  0 ",
    zIndex: 10,
    "&:after": {
        content: `""`,
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'block',
        height: "100% ",
        background: "linear-gradient(to top, rgba(72, 79, 227, .8) 0%, rgba(66, 70, 167, .8) 99%)",
        width: "100%",
        zIndex: -1
    }

})

export const BoxDetailCounterWrapper = styled(Box)({

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    gap: "1rem",


})

export const FooterWrapper = styled(Box)({
    backgroundColor: "var(--primary-color)",
    backgroundImage: `url(${MainBackImgFooter.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    display: "block",
    marginTop: "30rem"

})

export const CusInnerContainerFooter = styled(Box)({
    padding: "5rem  0",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem'
})


export const CustomTopArrow = styled(Box)({
    position: 'fixed',
    bottom: 20,
    backgroundColor: 'var(--primary-color)',
    right: 20,
    cursor: 'pointer',
    fontSize: '2rem',
    border: '1px solid  var(--white-color)',
    boxShadow: 'var(--primary-shadow)',
    zIndex: 1000,
    borderRadius: '50%',
    padding: '0.5rem',
    "& path": {
        color: 'var(--white-color)',
    },
    "&:hover": {
        backgroundColor: 'var(--secoundry-color)',
        transform: 'scale(1.1)',
    }
})

export const WrapperBergerMenu = styled(IconButton)({
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "1rem",
})

export const CusResponsiveMenu = styled(Box)({
    position: "absolute",
    width: "100vh",
    animation: "slideIn 0.3s ease-out",
    "@keyframes slideIn": {
        from: {
            transform: "translateY(-100%)",
            opacity: 0
        },
        to: {
            transform: "translateY(0)",
            opacity: 1
        }
    },
    display: 'block',
    backgroundColor: "var(--primary-color)",
    top: "100%",
    right: 0,
    padding: "2rem",
    zIndex: 999,
    "& a": {
        color: "var(--white-color)",
        textDecoration: "none",
        fontSize: "1.2rem"
    },
    "& a:hover": {
        color: "var(--secoundry-color)"
    }
})
