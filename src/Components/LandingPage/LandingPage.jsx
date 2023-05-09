import React from 'react'
import LandingNav from './LandingNav'
import LandingPageAlert from './LandingPageAlert'
import LandingPageCarousel from './LandingPageCarousel'

const LandingPage = () => {
  return (
    <>
        <LandingNav/>
        <LandingPageCarousel/>
        <LandingPageAlert/>
        
    </>
  )
}

export default LandingPage