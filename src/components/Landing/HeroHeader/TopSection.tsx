import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'

interface TopSectionProps {
    mainTite: string,
    subTitle: string
}

const TopSection: FC<TopSectionProps> = ({ mainTite, subTitle }) => {
    return (
        <Grid container justifyContent={"center"} mt={"2rem"}>
            <Grid size={{ md: 6 , xs : 12 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    margin: {
                        xs: " 0  2rem",
                        md: "0"
                    }
                }}>
                    <Typography className='TitleSection-landing__mainTitle'>{mainTite}</Typography>
                    <img src="/image/landingPage/titleSection.png" alt="" style={{
                        margin: "0.5rem 0",
                        textAlign: "center"
                    }} />
                    <Typography sx={{
                        lineHeight: 2,
                        width: '100%',
                        textAlign: "center",
                    }}>{subTitle}</Typography>

                </Box>
            </Grid>
        </Grid>

    )
}

export default TopSection