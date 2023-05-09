import React from 'react'
import LandingNav from './LandingNav'
import LandingPageAlert from './LandingPageAlert'
import LandingPageCarousel from './LandingPageCarousel'
import SchoolProgramsPage from './SchoolProgramsPage'

const LandingPage = () => {
  return (
    <>
        <LandingNav/>
        <LandingPageCarousel/>
        <LandingPageAlert/>
        <SchoolProgramsPage/>
        
    </>
  )
}

export default LandingPage