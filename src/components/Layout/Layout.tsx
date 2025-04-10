import { Box } from '@mui/material'
import React, { FC } from 'react'
import NavBar from '../navBar/NavBar'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Box>
            <NavBar />
            {children}
        </Box>
    )
}

export default Layout