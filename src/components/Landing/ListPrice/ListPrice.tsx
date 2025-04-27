import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import { ListPriceWrapper } from '@/elements/ElementsCustom'
import CardListPrice from './CardListPrice'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
const ListPrice = () => {
    return (
        <Box>
            <Container>
                <TopSection mainTite='جداول قیمت ها' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
              <ListPriceWrapper>
              <Grid container spacing={2}>
                    <Grid size={{ md: 4 }}>
                        <CardListPrice features={[
                            "100 مگابایت فضای دیسک",
                            "دریافت بی نهایت",
                            "یک سال پشتیبانی رایگان",
                            "15 گیگابایت هاست رایگان"

                        ]} iconCard={<RocketLaunchOutlinedIcon />} price={500000} subTitle='پلن ماهانه' title='پیشرفته' />

                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <CardListPrice features={[
                            "100 مگابایت فضای دیسک",
                            "دریافت بی نهایت",
                            "یک سال پشتیبانی رایگان",
                            "15 گیگابایت هاست رایگان"

                        ]} iconCard={<RocketLaunchOutlinedIcon />} price={500000} subTitle='پلن ماهانه' title='پیشرفته' />

                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <CardListPrice features={[
                            "100 مگابایت فضای دیسک",
                            "دریافت بی نهایت",
                            "یک سال پشتیبانی رایگان",
                            "15 گیگابایت هاست رایگان"

                        ]} iconCard={<RocketLaunchOutlinedIcon />} price={500000} subTitle='پلن ماهانه' title='پیشرفته' />

                    </Grid>

                </Grid>
              </ListPriceWrapper>

            </Container>
        </Box>
    )
}

export default ListPrice
