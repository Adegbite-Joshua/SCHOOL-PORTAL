import React from 'react'
import { Link } from 'react-router-dom'

const LandingNav = () => {
  return (
    <>
        <div className='LandingNav w-100 blue500 d-flex position-relative'>
            <div className='d-flex h-100 align-items-center'>
                <img src="vite.svg" alt="" style={{height: '50px', width: '50px'}} />
                <h3>PROADE SCHOOL</h3>
            </div>
            <ul className=''>
                <li className="">
                    <Link className="" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="signUpDropDown">
                    <a>Sign Up</a>
                    <div>
                        <li>
                            <Link>Staff</Link>
                            <Link>Student</Link>
                        </li>
                    </div>
                </li>
                <li className="">
                    <Link className="">Staff Portal</Link>
                </li>
                <li class="signInDropDown">
                    <a>Sign In </a>
                    <div>
                        <li>
                            <Link>Staff</Link>
                            <Link>Student</Link>
                        </li>
                    </div>
                </li>
                <li className="">
                    <Link className="" to='#'>Contact Us</Link>
                </li>
                <li className="">
                    <Link className="" to='#'>About Us</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default LandingNav