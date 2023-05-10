import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageFooter = () => {
  return (
    <>
        <div className="LandingPageFooter">
            <h3 className='text-center'>Contact Us</h3>
            <p className='text-center'><small><Link to='/'>89 Marsh Hill Road </Link></small></p>
            <p className='text-center'><small><Link to='/'>Orange, CT 06477</Link></small></p>
            <p className='text-center p-0 m-0'><small> Phone: (203) 799-6000</small></p>
            <p className='text-center p-0 m-0'><small> adegbitejoshua07@gmail.com</small></p>
        </div>
    </>
  )
}

export default LandingPageFooter