import { HIWCardProps } from '@/types/interfaces'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HIWCard: FC<HIWCardProps> = ({ disc, iconImage, link, title }) => {
    return (
        <Link href={link}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} gap={3}
                sx={{
                    padding: '2rem',
                    boxShadow: "-2px 1px 35px -15px rgba(0,0,0,0.75)",

                }}
            >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src={iconImage} alt="" />
                    <Typography sx={{
                        fontWeight: 'bold'
                    }}>{title}</Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        lineHeight: "2",
                        fontSize: '0.90rem'
                    }}>{disc}</Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                    <ArrowBackIcon sx={{
                        fontSize: "2rem",
                        color: "#444"}} />
                </Box>
            </Box>
        </Link>
    )
}

export default HIWCard