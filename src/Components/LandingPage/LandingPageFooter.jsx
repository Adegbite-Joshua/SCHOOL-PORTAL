import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageFooter = () => {
  return (
    <>
        {/* <div> */}
            <div className="LandingPageFooter">
                <h3 className='text-center'>Contact Us</h3>
                <p className='text-center'><small><Link to='/'>89 Marsh Hill Road </Link></small></p>
                <p className='text-center'><small><Link to='/'>Orange, CT 06477</Link></small></p>
                <p className='text-center p-0 m-0'><small> Phone: (203) 799-6000</small></p>
                <p className='text-center p-0 m-0'><small> adegbitejoshua07@gmail.com</small></p>
            </div>
            <div className='w-100 bg-light d-flex px-5 justify-content-between flex-column flex-md-row'>
                <p className='ms-0 ms-md-5'><small>PROADE SCHOOL | Copyright © 2023</small></p>
                <p className='me-0 me-md-5'><small>Website by PROADE</small></p>
            </div>
        {/* </div> */}
    </>
  )
}

export default LandingPageFooter