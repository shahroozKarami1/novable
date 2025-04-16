import { Box } from '@mui/material'
import React from 'react'
import HeroHeader from './HeroHeader/HeroHeader'
import HowItWorks from './HowItWorks/HowItWorks'
import Membership from './Membership/Membership'
import MapCliant from './Membership/MapCliant'

const Landing = () => {
  return (
    <Box>
      <HeroHeader />
      <HowItWorks />
      <Membership />
      <MapCliant/>

    </Box>
  )
}

export default Landing
