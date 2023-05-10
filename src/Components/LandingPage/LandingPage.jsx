import React, { useState } from 'react'
import LandingNav from './LandingNav'
import LandingPageAlert from './LandingPageAlert'
import LandingPageCarousel from './LandingPageCarousel'
import LandingPageFooter from './LandingPageFooter'
import LandingPageVideoDiv from './LandingPageVideoDiv'
import ParallaxScrooling from './ParallaxScrooling'
import SchoolProgramsPage from './SchoolProgramsPage'
import UpcomingCalendar from './UpcomingCalendar'

const LandingPage = () => {
  // window.onscroll(()=>showHeight())
  const [percentage, setpercentage] = useState(0)
  window.onscroll=()=>setpercentage((window.scrollY/(document.documentElement.scrollHeight - window.innerHeight))*100)
  return (
    <>
        <LandingNav percent={percentage}/>
        <LandingPageCarousel/>
        <LandingPageAlert/>
        <SchoolProgramsPage/>
        <LandingPageVideoDiv/>
        <ParallaxScrooling/>
        <UpcomingCalendar/>
        <LandingPageFooter/>
        
    </>
  )
}

export default LandingPage