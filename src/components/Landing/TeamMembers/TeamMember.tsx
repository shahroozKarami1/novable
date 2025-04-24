import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import TeamMemberCard from './TeamMemberCard'
import { fetchData } from '@/services/apiServices'

const TeamMember = async () => {
    const { data } = await fetchData("/teamWork")
    return (
        <Box sx={{
            my: "2rem",
        }}>
            <TopSection mainTite='اعضای بی نظیر تیم' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
            <Container sx={{ mt: "3rem" }}>
                <Grid container spacing={4}>
                    {
                        data.map((item: any) => (
                            <Grid size={{ md: 4, xs: 12 }} key={item.id}>
                                <TeamMemberCard cardOverLay={{ disc: item.description, jobPosition: item.jobPosition, name: item.name }} cover={item.image} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default TeamMember
