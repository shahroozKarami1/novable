import { Box, IconButton, Typography } from '@mui/material'
import React, { FC } from 'react'

interface AboutUsLeftSectionProps {
    title: string,
    disc: string,
    icon: React.ReactNode
}

const AboutUsLeftSection: FC<AboutUsLeftSectionProps> = ({
    disc, icon, title
}) => {
    return (

        <Box display={"flex"} alignItems={"flex-start"} gap={2} sx={{
            marginTop: "3rem"
        }}>
            <Box>
                <IconButton sx={{
                    padding: 1 , 
                    margin: 0,
                    color: 'var(--secoundry-color)',
                    border: "1px  solid var(--secoundry-color) ",
                    borderRadius: "50%",
                    
                    "& svg": {
                        fontSize: "2rem"
                    }
                }}>
                    {icon}

                </IconButton>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "flex-start",
                gap: 2
            }}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: "1.2rem"
                }}>{title}</Typography>
                <Typography sx={{
                    lineHeight: 2,
                    color: '#444'
                }}>{disc}</Typography>
            </Box>
        </Box>
    )
}

export default AboutUsLeftSection