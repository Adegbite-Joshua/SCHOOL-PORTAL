import React, { useState } from 'react'
import LandingNav from '../LandingPage/LandingNav'
import { Link } from 'react-router-dom'




const SignInPage = () => {
  const [percentage, setpercentage] = useState(0)
  window.onscroll=()=>setpercentage((window.scrollY/(document.documentElement.scrollHeight - window.innerHeight))*100)
  return (
    <>
        <LandingNav percent={percentage} />    
        <h3 className='text-center bg-light m-0'>Sign In Page</h3>
        <div className="d-flex w-100 topSpace px-4 gap-3 bg-light" style={{height: '100vh'}} >
            <div className='signup rounded-4'>
              <form action="" method="post">
                  <label htmlFor="email">Email</label>
                  <input className='form-control my-2' id='email' name='email' type="text" placeholder='Email' />
                  <label htmlFor="id">Student Id</label>
                  <input className='form-control my-2' id='text' name='email' type="text" placeholder='Student Id' />
                  <label htmlFor="password">Password</label>
                  <input className='form-control my-2' id='password' name='password' type="text" placeholder='Password' />
                  <button className='btn btn-success w-100 d-block'>Sign In</button>
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