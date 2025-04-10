import { Box } from '@mui/material'
import React, { FC } from 'react'

interface ContainerProps {
    children: React.ReactNode
}

const CusContainer: FC<ContainerProps> = ({ children }) => {
    return (
        <Box sx={{
            maxWidth: "1400px",
            margin: "0  auto",
            padding: { xs: '16px', sm: '24px', md: '32px' },

        }}>
            {
                children
            }
        </Box>
    )
}

export default CusContainer