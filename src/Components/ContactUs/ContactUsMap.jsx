import React from 'react'
import { Link } from 'react-router-dom'




const ContactUsMap = () => {
  return (
    <>
        <div className='ContactUsMap p-3'>
            <h2>HOPE Academy</h2>
            <small>89 Marsh Hill Road</small>
            <small>Orange, CT 06477</small>
            <p>Email: <a  href="mailto:adegbitejoshua07@gmail.com" className='d-inline'><small>adegbitejoshua07@gmail.com</small></a></p>
            <p>Facebook: <Link className='d-inline'><small>Adegbite Joshua</small></Link></p>
            <p>Twitter: <Link className='d-inline'><small>info@.com</small></Link></p>
            <p>Telephone: <a href="tel:+2347015886456" className='d-inline'><small>+2347015886456</small></a></p>
            <p>WhatsApp: <a href='wa.me/+2347015886456' className='d-inline'><small>+2347015886456</small></a></p>
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