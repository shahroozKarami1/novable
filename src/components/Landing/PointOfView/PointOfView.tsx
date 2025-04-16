import { WrapperPointOfView } from '@/elements/ElementsCustom'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopSection from '../HeroHeader/TopSection'
import PointOfViewCard from './PointOfViewCard'
import SimpleSlider from '@/components/slider/SimpleSlider'

const PointOfView = () => {
  return (
    <Box>
      <TopSection mainTite='دیدگاه های مشتریان' subTitle='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' />
      <Container>
        <WrapperPointOfView>
          <SimpleSlider numberShowSlider={2} >
            <PointOfViewCard
              disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون'
              jobPosition='برنامه نویس' name='شهروز کرمی' profile='/image/landingPage/PointOfView/simpleProfile.png' />
            <PointOfViewCard
              disc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون'
              jobPosition='برنامه نویس' name='شهروز کرمی' profile='/image/landingPage/PointOfView/simpleProfile.png' />
          </SimpleSlider>

        </WrapperPointOfView>
      </Container>
    </Box>
  )
}

export default PointOfView
