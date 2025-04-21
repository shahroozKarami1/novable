import { PointOfviewCardProfile, PointOfViewCardWrapper } from '@/elements/ElementsCustom'
import { PointOfViewCardProps } from '@/types/interfaces'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const PointOfViewCard: FC<PointOfViewCardProps> = ({ disc, jobPosition, name, profile }) => {
    return (
        <PointOfViewCardWrapper >
            <PointOfviewCardProfile className='PointOfview__profile' >
                <img src={profile} alt="" />
            </PointOfviewCardProfile>
            <Box display={"flex"}
                margin={
                    {
                        xs: "0 1rem",
                        md: "0 5rem"
                    }
                }
                justifyContent={"center"}
                gap={1}
                alignItems={"center"}
                flexDirection={"column"}>
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: '1.5rem'
                }}>{name}</Typography>
                <Typography sx={{
                    fontSize: '0.90rem',
                    color: "#444",
                }}>{jobPosition}</Typography>
                <FormatQuoteIcon sx={
                    {
                        color: 'var(--primary-color)',
                        fontSize: "5rem"
                    }
                } />
                <Typography sx={{
                    lineHeight: '2',
                    color: "#444",
                    fontSize: "1.15rem",
                    mt: "1rem",
                    textAlign: "center"
                }}>{disc}</Typography>
            </Box>

        </PointOfViewCardWrapper>

    )
}

export default PointOfViewCard