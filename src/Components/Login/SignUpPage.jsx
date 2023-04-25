import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import SignInPage from './SignInPage'

const SignUpPage = () => {
  const navigate = useNavigate()
  const signUp =()=>{
    navigate("/signin")
  }
  return (
    <>  
        <NavBar/>
        <div className="d-flex w-100 gap-3 px-4 topSpace">
          <div className="" style={{flexBasis: "50%"}}>
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
                  <button className='btn btn-success w-100 d-block' onClick={signUp}>Sign Up</button>
              </form>
          </div>
          <div className=" signup" style={{flexBasis: "50%"}}>
              
          </div>
        </div>
    </>
  )
}

export default SignUpPage