import React, { useState } from 'react'
import LandingNav from '../LandingPage/LandingNav'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
 import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const SignInPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      password: '',
      class: 0,
      matricNumber: ''
    },
    onSubmit: (values)=>{
      // console.log(values);
      let endpoint = 'http://localhost:7777/student/signin'
      axios.post(endpoint, values)
      .then((res)=>{
        console.log(res);
        if(res.status==200){
          localStorage.setItem('studentclass', values.class)
          localStorage.setItem('studentpassword', values.password)
          localStorage.setItem('studentmatric', values.matricNumber)
          navigate("/dashboard/uhjhj")
        } else if(res.status==11000){
          console.log('email already exixts')
        } else if(res.status==401){
          console.log('error in validating')
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  })
  return (
    <>
        <LandingNav/>    
        <h3 className='text-center bg-light m-0'>Sign In Page</h3>
        <div className="d-flex w-100 topSpace px-4 gap-3 bg-light" style={{height: '100vh'}} >
            <div className='signup rounded-4'>
              <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="class">Class</label>
                  {/* <input className='form-control my-2' {...formik.getFieldProps} id='email' name='email' type="text" placeholder='Email' /> */}
                  <select name="class" id="class" {...formik.getFieldProps('class')} required className='form-control my-2'>
                    <option value="0">JSS1</option>
                    <option value="1">JSS2</option>
                    <option value="2">JSS3</option>
                    <option value="3">SSS1</option>
                    <option value="4">SSS2</option>
                    <option value="5">SSS3</option>
                  </select>
                  <label htmlFor="id">Student Id</label>
                  <input className='form-control my-2' {...formik.getFieldProps('matricNumber')} id='matricNumber' name='matricNumber' type="text" placeholder='Matric Number' />
                  <label htmlFor="password">Password</label>
                  <input className='form-control my-2' {...formik.getFieldProps('password')} id='password' name='password' type="password" placeholder='Password' />
                  <button type='submit' onClick={formik.handleSubmit} className='btn btn-success w-100 d-block'>Sign In</button>
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