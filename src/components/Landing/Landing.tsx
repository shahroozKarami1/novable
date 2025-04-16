import { Box } from '@mui/material'
import React from 'react'
import HeroHeader from './HeroHeader/HeroHeader'
import HowItWorks from './HowItWorks/HowItWorks'
import Membership from './Membership/Membership'
import MapCliant from './Membership/MapCliant'
import PointOfView from './PointOfView/PointOfView'

const Landing = () => {
  return (
    <Box>
      <HeroHeader />
      <HowItWorks />
      <PointOfView/>
      <Membership />
      <MapCliant/>

    </Box>
  )
}

export default Landing
