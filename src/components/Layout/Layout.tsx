import { Box } from '@mui/material'
import React, { FC } from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../Footer/Footer'
import TopArrow from '../TopArrow/TopArrow'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Box>
            <TopArrow />
            <NavBar />
            {children}
            <Footer />
        </Box>
    )
}

export default Layout