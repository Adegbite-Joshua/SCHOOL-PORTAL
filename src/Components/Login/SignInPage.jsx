import React from 'react'
import NavBar from '../LandingPage/NavBar'

const SignInPage = () => {
  return (
    <>
        <NavBar/>    
        <div className="w-50 d-block mx-auto topSpace" >
            <form action="" method="post">
                <label htmlFor="email">Email</label>
                <input className='form-control my-2' id='email' name='email' type="text" placeholder='Email' />
                <label htmlFor="password">Password</label>
                <input className='form-control my-2' id='password' name='password' type="text" placeholder='Password' />
                <button className='btn btn-success w-100 d-block'>Sign In</button>
            </form>
        </div>
    </>
  )
}

export default SignInPage