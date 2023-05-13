import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingNav from '../LandingPage/LandingNav'
import SignInPage from './SignInPage'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'



const SignUpPage = () => {
  const navigate = useNavigate()
  const signUp =()=>{
    navigate("/signin")
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      class: '',
      links : {
          twitter: '',
          facebook: '',
          whatsapp: '',
          other: ''
      },
      matricNumber: `HOPE${Math.round(Math.random()*100000)}`,
      localGovernment: '',
      State: '',
      Country: '',
      proileUrl: '',
      subjects: [],
      messages: [],
      announcements: []
    }
  })
  return (
    <>  
        <LandingNav/>
        <h3 className='text-center bg-light m-0 p-3'>Sign Up Page</h3>
        <div className="d-flex w-100 p-4 topSpace bg-light gap-3">
          <div className="border signup rounded-5">
              <form action="" method="post">
                  <label htmlFor="firstName">First Name</label>
                  <input className='form-control my-2' type="text" id='firstName' name='firstName' placeholder='First Name' />
                  <label htmlFor="lastName">Last Name</label>
                  <input className='form-control my-2' id='lastName' name='lastName' type="text" placeholder='Last Name' />
                  <label htmlFor="email">Email</label>
                  <input className='form-control my-2' id='email' name='email' type="text" placeholder='Email' />
                  <label htmlFor="password">Password</label>
                  <input className='form-control my-2' id='password' name='password' type="text" placeholder='Password' />
                  <input className='form-control my-2' type="hidden" id='matricNumber' name='matricNumber' placeholder='MatricNumber' value={`PROADESCHOOL${Math.round(Math.random()*10000000)}`} />
                  <label htmlFor='firstName'>Address</label>
                  <input type='text' className='form-control' placeholder='Address' id='firstName' />
                  <label htmlFor='firstName'>Local Goverment</label>
                  <input type='text' className='form-control' placeholder='Local Goverment' id='firstName' />
                  <label htmlFor='firstName'>State</label>
                  <input type='text' className='form-control' placeholder='State' id='firstName' />
                  <div style={{aspectRatio: '1'}} className='w-50 mx-auto bg-dark opacity-75 my-2 d-flex justify-content-center align-items-center'>
                    <h3 className='text-light'>Profile Picture</h3>
                  </div>
                  <input type="file" name="" className='form-control' id="" />
                  <button className='btn btn-success w-100 d-block my-2' onClick={signUp}>Sign Up</button>
                  <Link className='d-md-none text-light'>Sign In</Link>
              </form>
          </div>
          <div className=" signupOtherDiv rounded-5">     
              <span className='px-3 py-2 rounded-pill bg-dark text-light'><Link>Sign In</Link></span>
          </div>
        </div>
    </>
  )
}

export default SignUpPage