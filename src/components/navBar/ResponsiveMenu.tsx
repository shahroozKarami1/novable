import { CusResponsiveMenu } from '@/elements/ElementsCustom'
import { List } from '@mui/material'
import React from 'react'
import { NavBarLinks } from './NavBar'

const ResponsiveMenu = () => {
    return (
        <CusResponsiveMenu sx={{
            display: {
                xs: "block",
                md: "none"
            }
        }}>
            <List sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                gap: "2rem",
            }}>
                <NavBarLinks innerText='خانه' link='/' />
                <NavBarLinks innerText='درباره ما' link='/' />
                <NavBarLinks innerText='ویژگی ها' link='/' />
                <NavBarLinks innerText='تصاویر' link='/' />
                <NavBarLinks innerText='قیمت ها' link='/' />
                <NavBarLinks innerText='بلاگ' link='/' />
                <NavBarLinks innerText='تماس' link='/' />            </List>
        </CusResponsiveMenu>
    )
}

export default ResponsiveMenu
