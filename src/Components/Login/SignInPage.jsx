import React, { useState } from 'react'
import LandingNav from '../LandingPage/LandingNav'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'



const SignInPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      subjects: [0,1],
      clas: 0
    },
    onSubmit: (values)=>{
      // console.log(values);
      submit(values)
    }
  })
  return (
    <>
        <LandingNav/>    
        <h3 className='text-center bg-light m-0'>Sign In Page</h3>
        <div className="d-flex w-100 topSpace px-4 gap-3 bg-light" style={{height: '100vh'}} >
            <div className='signup rounded-4'>
              <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input className='form-control my-2' {...formik.getFieldProps} id='email' name='email' type="text" placeholder='Email' />
                  <label htmlFor="id">Student Id</label>
                  <input className='form-control my-2' {...formik.getFieldProps} id='text' name='matricNumber' type="text" placeholder='Matric Number' />
                  <label htmlFor="password">Password</label>
                  <input className='form-control my-2' {...formik.getFieldProps} id='password' name='password' type="password" placeholder='Password' />
                  <button onClick={formik.handleSubmit} className='btn btn-success w-100 d-block'>Sign In</button>
                  <Link>Sign Up</Link>
              </form>
            </div>
            <div className='signinOtherDiv rounded-4'>
            <span className='px-3 py-2 rounded-pill bg-dark text-light'><Link>Sign Up</Link></span>
            </div>
        </div>
    </>
  )
}

export default SignInPage