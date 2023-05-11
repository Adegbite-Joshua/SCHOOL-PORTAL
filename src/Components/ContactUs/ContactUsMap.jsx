import React from 'react'
import { Link } from 'react-router-dom'



const ContactUsMap = () => {
  return (
    <>
        <div className='ContactUsMap p-3'>
            <h2>HOPE Academy</h2>
            <small>89 Marsh Hill Road</small>
            <small>Orange, CT 06477</small>
            <Link><small>info@hopeacademyct.com</small></Link>
            <p>Telephone: (203) 799-6000</p>
            <p>Facsimile: (203) 799-0000</p>
            <iframe
                width="100%"
                height="250"
                frameborder="0" style={{border: '0'}}
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?q=sqiogbomoso&key=AIzaSyBnnzmm550Bo1McFJZ_MCaQ5IKha6TH8G8&zoom=21&maptype=satellite"
                allowfullscreen>
            </iframe>
        </div>
    </>
  )
}

export default ContactUsMap