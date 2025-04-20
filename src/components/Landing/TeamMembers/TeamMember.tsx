import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import TeamMemberCard from './TeamMemberCard'

const TeamMember = () => {
    return (
        <Box sx={{
            my : "2rem" ,  
        }}>
            <TopSection mainTite='اعضای بی نظیر تیم' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
            <Container  sx={{mt : "3rem"}}>
                <Grid container spacing={4}>
                    <Grid size={{ md: 4 , xs : 12 }}>
                        <TeamMemberCard cardOverLay={{ disc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک", jobPosition: "برنامه  نویس اندروید", name: "تونی استارک" }} cover='/image/landingPage/TeamMembers/profile1.png' />
                    </Grid>
                    <Grid size={{ md: 4  , xs : 12 }}>
                        <TeamMemberCard cardOverLay={{ disc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک", jobPosition: "برنامه  نویس اندروید", name: "تونی استارک" }} cover='/image/landingPage/TeamMembers/profile2.png' />
                    </Grid>
                    <Grid size={{ md: 4  , xs : 12 }}>
                        <TeamMemberCard cardOverLay={{ disc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک", jobPosition: "برنامه  نویس اندروید", name: "تونی استارک" }} cover='/image/landingPage/TeamMembers/profile3.png' />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default TeamMember
