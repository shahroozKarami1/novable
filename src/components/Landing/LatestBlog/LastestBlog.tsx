import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import LatestBlogCard from './LatestBlogCard'

const LastestBlog = () => {
    return (
        <Box my={"5rem"}>
            <TopSection mainTite='مطالب اخیر بلاگ' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />

            <Container sx={{ mt: "3rem" }}>
                <Grid container spacing={5}>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <LatestBlogCard author='مدیر' countComments={15} cover='/image/landingPage/latestBlog/img1.png' date='31 اردیبهشت 1404' disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای' title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت' />
                    </Grid>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <LatestBlogCard author='مدیر' countComments={15} cover='/image/landingPage/latestBlog/img2.png' date='31 اردیبهشت 1404' disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای' title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت' />
                    </Grid>
                    <Grid size={{ md: 4, xs: 12 }}>
                        <LatestBlogCard author='مدیر' countComments={15} cover='/image/landingPage/latestBlog/img3.png' date='31 اردیبهشت 1404' disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای' title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت' />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default LastestBlog
