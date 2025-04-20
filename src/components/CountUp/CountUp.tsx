"use client"
import React, { FC } from 'react';
import { Box, TypographyProps } from '@mui/material';
import CountUp from "react-countup";



interface CustomComponentProps extends TypographyProps {
    endNumber: number,

}

const CountUpComponent: FC<CustomComponentProps> = ({
    endNumber,
    sx
}) => {
    return (
        <Box sx={{
            ...sx
        }}>
            <CountUp
                className="account-balance"
                start={0}
                end={endNumber}
                duration={10}
                useEasing={true}
                separator=","
            />

        </Box>
    );
};

export default CountUpComponent;