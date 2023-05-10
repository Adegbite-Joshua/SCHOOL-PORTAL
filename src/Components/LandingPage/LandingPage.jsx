import React from 'react'
import LandingNav from './LandingNav'
import LandingPageAlert from './LandingPageAlert'
import LandingPageCarousel from './LandingPageCarousel'
import LandingPageVideoDiv from './LandingPageVideoDiv'
import SchoolProgramsPage from './SchoolProgramsPage'
import UpcomingCalendar from './UpcomingCalendar'

const LandingPage = () => {
  return (
    <>
        <LandingNav/>
        <LandingPageCarousel/>
        <LandingPageAlert/>
        <SchoolProgramsPage/>
        <LandingPageVideoDiv/>
        <UpcomingCalendar/>
        
    </>
  )
}

export default LandingPage