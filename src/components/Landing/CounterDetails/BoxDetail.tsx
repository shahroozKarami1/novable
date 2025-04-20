import CountUpComponent from '@/components/CountUp/CountUp'
import { BoxDetailCounterWrapper } from '@/elements/ElementsCustom'
import { IconButton, Typography } from '@mui/material'
import React, { FC } from 'react'

interface BoxDetailProps {
    icon: React.ReactNode,
    NumberDetails: number,
    subDetail: string,
}

const BoxDetail: FC<BoxDetailProps> = ({ icon, NumberDetails, subDetail }) => {
    return (
        <BoxDetailCounterWrapper>
            <IconButton sx={{
                "& svg": {
                    fontSize: "4rem",
                    color: "#fff"

                }
            }}>{icon}</IconButton>
    
                <CountUpComponent  sx={{
                    fontSize : '2rem' ,  
                    color : 'var(--white-color)'
                }}  endNumber={NumberDetails} />

            <Typography sx={{
                fontSize: "1.2rem",
                color: "var(--white-color)"
            }}>
                {
                    subDetail
                }
            </Typography>

        </BoxDetailCounterWrapper>
    )
}

export default BoxDetail
