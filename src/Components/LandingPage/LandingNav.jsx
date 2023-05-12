import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const LandingNav = ({percent}) => {
    const [percentage, setpercentage] = useState(0)
    window.onscroll=()=>setpercentage((window.scrollY/(document.documentElement.scrollHeight - window.innerHeight))*100)
    const showSideBar =()=>{
        document.getElementById('navUl').classList.toggle('responsive')
    }
  return (
    <>
        <div className="position-sticky top-0 w-100" style={{zIndex: '9999999999'}}>
        <div className='LandingNav w-100 blue500 d-flex position-relative '>
            <div className='d-flex h-100 align-items-center'>
                <img src="vite.svg" alt="" style={{height: '50px', width: '50px'}} />
                <h3>PROADE SCHOOL</h3>
            </div>
            <ul id='navUl' className=''>
                <li className="">
                    <Link className="" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="signUpDropDown">
                    <a>Sign Up</a>
                    <ul>
                        <li><Link to='http://localhost:2000/signup'>Staff</Link></li>
                        <li><Link to='/signup'>Student</Link></li>
                    </ul>
                </li>
                <li className="">
                    <Link className="">Staff Portal</Link>
                </li>
                <li class="signInDropDown">
                    <a>Sign In </a>
                    <ul>
                        <li><Link to='http://localhost:2000/signin'>Staff</Link></li>
                        <li><Link to='/signin'>Student</Link></li>
                    </ul>
                </li>
                <li className="">
                    <Link className="" to='/contactus'>Contact Us</Link>
                </li>
                <li className="">
                    <Link className="" to='/aboutus'>About Us</Link>
                </li>
            </ul>
            <span onClick={showSideBar}><i className='fa fa-bars'></i></span>
        </div>
        <div className='w-100 bg-danger' style={{height: '8px'}}>
            <div style={{width: `${percentage}%`}} className='h-100 bg-warning'>
            </div>
        </div>
        </div>
    </>
  )
}

export default LandingNav