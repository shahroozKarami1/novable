"use client"
import { CusNavBar, WrapperBergerMenu } from '@/elements/ElementsCustom'
import { Box, Button, Container, Grid, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveMenu from './ResponsiveMenu'
import LoginDialog from '../Landing/LoginDialog/LoginDialog'
import Cookies from 'js-cookie'

export const NavBarLinks: FC<{ innerText: string, link: string }> = ({ innerText, link }) => {
  return (
    <ListItem sx={{
      width: "80px",
      padding: 0,
      display: "flex",
      justifyContent: 'center',
      margin: 0,

    }}>
      <Typography sx={{
        "a": {
          color: "var(--white-color)",
          fontSize: {
            xs: "0.85rem",
            md: "1rem"
          },
          "&:hover": {
            color: "var(--secoundry-color)",
            transition: 'all 0.3s ease-in-out',
          }
        }
      }}>
        <Link href={link} >
          {
            innerText
          }
        </Link>

      </Typography>
    </ListItem>
  )
}
const NavBar = () => {

  let [isOpenBergerMenu, setIsOpenBergerMenu] = useState(false)
  const handleOpenBergerMenu = () => {
    setIsOpenBergerMenu(!isOpenBergerMenu)
  }
  let [isOpenLoginDialog, setIsOpenLoginDialog] = useState(false)
  const handleOpenLoginDialog = () => {
    setIsOpenLoginDialog(!isOpenLoginDialog)
  }
  const handlerScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  let token = Cookies.get("token")


  return (
    <>

      <CusNavBar>
        <Container  >
          <Grid container sx={{
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "flex-end" }
          }}>
            <Grid size={{ md: 2 }}>
              <Link href="/" onClick={handlerScrollToTop}>
                <img src="/image/landingPage/LogoNavBar.png" alt="" />
              </Link>
            </Grid>
            <Grid size={{ md: 4 }} sx={{
              display: { md: "none", xs: "grid" },
            }}>
              <WrapperBergerMenu onClick={handleOpenBergerMenu}>
                <MenuIcon sx={{
                  color: "var(--white-color)",
                  fontSize: "2.5rem",
                  border: "3px solid var(--white-color)",

                }} />
              </WrapperBergerMenu>

            </Grid>
            {
              isOpenBergerMenu && <ResponsiveMenu />
            }
            <Grid display={{ md: "Grid", xs: "none" }} size={{ md: 10 }}>
              <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                <List sx={{
                  display: "flex",
                  padding: 0,
                  ml: "2rem"
                }}>
                  <NavBarLinks innerText='خانه' link='/' />
                  <NavBarLinks innerText='درباره ما' link='#aboutUs' />
                  <NavBarLinks innerText='ویژگی ها' link='/' />
                  <NavBarLinks innerText='تصاویر' link='/' />
                  <NavBarLinks innerText='قیمت ها' link='/' />
                  <NavBarLinks innerText='بلاگ' link='/' />
                  <NavBarLinks innerText='تماس' link='/' />
                </List>
                {
                  !token ? <Button
                    onClick={handleOpenLoginDialog}
                    sx={{
                      border: "1px  solid  var(--white-color)",
                      color: "var(--white-color)",
                      padding: " 0.5rem 2rem"
                    }}>شروع  کنید</Button> :
                    <Button
                      sx={{
                        border: "1px  solid  var(--white-color)",
                        color: "var(--white-color)",
                        padding: " 0.5rem 2rem"
                      }}>شهروز کرمی </Button>
                }

              </Box>
            </Grid>
          </Grid>
        </Container>


      </CusNavBar>
      {
        isOpenLoginDialog && <LoginDialog open={isOpenLoginDialog} handleCloseDiollog={handleOpenLoginDialog} />
      }
    </>
  )
}

export default NavBar
