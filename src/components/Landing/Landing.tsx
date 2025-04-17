import { Box } from '@mui/material'
import React from 'react'
import HeroHeader from './HeroHeader/HeroHeader'
import HowItWorks from './HowItWorks/HowItWorks'
import Membership from './Membership/Membership'
import MapCliant from './Membership/MapCliant'
import PointOfView from './PointOfView/PointOfView'
import AboutUs from './AboutUs/AboutUs'
import TeamMember from './TeamMembers/TeamMember'

const Landing = () => {
  return (
    <Box>
      <HeroHeader />
      <HowItWorks />
      <AboutUs />
      <PointOfView />
      <TeamMember/>
      <Membership />
      <MapCliant />

    </Box>
  )
}

export default Landing
