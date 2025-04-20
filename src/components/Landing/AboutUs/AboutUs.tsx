import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import AboutUsLeftSection from './AboutUsLeftSection'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
const AboutUs = () => {
    return (
        <Box my={"5rem"}>
            <TopSection mainTite='درباره ما' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
            <Container sx={{
                mt : "5rem"
            }}>
                <Grid container spacing={5} >
                    <Grid size={{ md: 6 , xs : 12 }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%"
                        }}>
                            <img src="/image/landingPage/aboutUs/aboutUsRightSection.png" alt="" style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                height: "100%",
                                width: '100%'
                            }} />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 6 , xs : 12 }}>

                        <AboutUsLeftSection disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز' icon={<MiscellaneousServicesIcon />} title="استفاده آسان" />
                        <AboutUsLeftSection disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز' icon={<MiscellaneousServicesIcon />} title="استفاده آسان" />
                        <AboutUsLeftSection disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز' icon={<MiscellaneousServicesIcon />} title="استفاده آسان" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutUs
