import CusContainer from '@/components/Container/Container'
import { Box } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import RightSide from './RightSide'
import { CusHeroHeader } from '@/elements/ElementsCustom'
const HeroHeader = () => {
    return (
        <CusHeroHeader sx={{
            height: {
                xs: "100vh",
                md: "100%"
            },
        }}>
            <CusContainer>
                <Grid container alignItems={"center"} justifyContent={"center"} spacing={5}>
                    <Grid size={{ md: 6 }}>
                        <RightSide />
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <Box sx={{
                            marginTop: "3rem",
                            width: '800px',
                            height: "100%",
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        }}>
                            <img src="/image/landingPage/MainImgHeroHeader.png" alt="" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                objectPosition: "center"
                            }} />

                        </Box>
                    </Grid>
                </Grid>
            </CusContainer>

        </CusHeroHeader>
    )
}

export default HeroHeader
