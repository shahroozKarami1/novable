"use client"
import { CusNavBar } from '@/elements/ElementsCustom'
import { Box, Button, Container, Grid, List, ListItem } from '@mui/material'
import Link from 'next/link'
import React, { FC, useState } from 'react'
const NavBarLinks: FC<{ innerText: string, link: string }> = ({ innerText, link }) => {
  return (
    <ListItem sx={{
      width: "80px",
      padding: 0,
      display: "flex",
      justifyContent: 'center',
      margin: 0
    }}>
      <Link href={link} style={{

        color: 'var(--white-color)',
      }}>
        {
          innerText
        }
      </Link>
    </ListItem>
  )
}
const NavBar = () => {
  return (
    <>

      <CusNavBar>
        <Container>
          <Grid container>
            <Grid size={{ md: 2 }}>
              <Box >
                <img src="/image/landingPage/LogoNavBar.png" alt="" />
              </Box>
            </Grid>
            <Grid size={{ md: 10 }}>
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
