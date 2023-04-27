import React from 'react'
import Herodiv from './Herodiv'

const HeroSection = () => {
    // let heroSection = {
    //         backgroundImage: '',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover',
    //         backgroundPosition: '0 0'
    // }
  return (
    <>
        <div style={{height: '75vh', width: '80%'}} id='heroSection' className="position-relative d-flex justify-content-end mx-auto mt-5  border border-3 rounded-5 overflow-hidden">
            <img src="Medias/Hero.jpeg" alt="" className="w-100 h-100 position-absolute top-0 start-0 w-100 h-100" />
            <div id='subHero'>
                <Herodiv title="Design" body=""/>
                <Herodiv title="Programming" body=""/>
                <Herodiv title="Marketing" body=""/>
                <Herodiv title="Business" body=""/>
            </div>
        </div>
    </>
  )
}

export default HeroSection