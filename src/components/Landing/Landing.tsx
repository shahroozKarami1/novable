import { Box } from '@mui/material'
import React from 'react'
import HeroHeader from './HeroHeader/HeroHeader'
import HowItWorks from './HowItWorks/HowItWorks'
import Membership from './Membership/Membership'
// import MapCliant from './Membership/MapCliant'
import PointOfView from './PointOfView/PointOfView'
import AboutUs from './AboutUs/AboutUs'
import TeamMember from './TeamMembers/TeamMember'
import LastestBlog from './LatestBlog/LastestBlog'
import UsualQus from './UsualQus/UsualQus'
import CounterDetails from './CounterDetails/CounterDetails'
import ListPrice from './ListPrice/ListPrice'
const Landing = () => {
  return (
    <Box>
      <HeroHeader />
      <HowItWorks />
      <AboutUs />
      <UsualQus />
      <PointOfView />
      <ListPrice />
      <TeamMember />
      <CounterDetails />
      <LastestBlog />
      <Membership />
      {/* <MapCliant /> */}


    </Box>
  )
}

export default Landing
