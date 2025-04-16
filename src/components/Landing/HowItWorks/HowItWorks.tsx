import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import HIWCard from './HIWCard'

const HowItWorks = () => {
    return (
        <Box>
            <Container>
                <TopSection mainTite='چگونه کار می کند' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
                <Grid container spacing={4} sx={{
                    mt : '3rem'
                }} >
                    <Grid size={{ md: 4 }}>
                        <HIWCard disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله' iconImage='/image/landingPage/HIWCard/img1.png' link='/' title='دسترسی پذیری' />
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <HIWCard disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله' iconImage='/image/landingPage/HIWCard/img2.png' link='/' title='ارزش بالا' />
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <HIWCard disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله' iconImage='/image/landingPage/HIWCard/img1.png' link='/' title='دسترسی پذیری' />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default HowItWorks
