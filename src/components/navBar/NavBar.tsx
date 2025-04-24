"use client"
import { CusNavBar, WrapperBergerMenu } from '@/elements/ElementsCustom'
import { Box, Button, Container, Grid, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveMenu from './ResponsiveMenu'

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
  return (
    <>

      <CusNavBar>
        <Container  >
          <Grid container sx={{
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "flex-end" }
          }}>
            <Grid size={{ md: 2 }}>
              <Box >
                <img src="/image/landingPage/LogoNavBar.png" alt="" />
              </Box>
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
                  <NavBarLinks innerText='درباره ما' link='/' />
                  <NavBarLinks innerText='ویژگی ها' link='/' />
                  <NavBarLinks innerText='تصاویر' link='/' />
                  <NavBarLinks innerText='قیمت ها' link='/' />
                  <NavBarLinks innerText='بلاگ' link='/' />
                  <NavBarLinks innerText='تماس' link='/' />
                </List>
                <Button sx={{
                  border: "1px  solid  var(--white-color)",
                  color: "var(--white-color)",
                  padding: " 0.5rem 2rem"
                }}>شروع  کنید</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>


      </CusNavBar>
    </>
  )
}

export default NavBar
