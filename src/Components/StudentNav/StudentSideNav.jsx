import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const StudentSideNav = () => {
  return (
    <>
        <div id="mySidenav" className="sidenav text-center d-flex w-100">
            <img src="/vite.svg" style={{height: '120px', width: '120px'}} className='mt-5 mb-3' alt="" />
            <h1 className='text-light'>PROADE SCHOOL</h1>
            <Link to='/dashboard'><span id='icon'><i className='fas fa-home '></i></span> <span className='' id='text'>Home</span></Link>
            <Link to='/inbox'><span id='icon'><i className='fas fa-inbox '></i></span> <span className='' id='text'>Inbox</span></Link>
            <Link to='/subjects'><span id='icon'><i className='fas fa-book '></i></span> <span className='' id='text'>Subjects</span></Link>
            <Link to='/announcement'><span id='icon'><i className='fas fa-bell '></i></span> <span className='' id='text'>Announcements</span></Link>
            <Link to='/activities'><span id='icon'><i className='fas fa-calendar '></i></span> <span className='' id='text'>Activities</span></Link>
            <Link to='/settings'><span id='icon'><i className='fas fa-gear '></i></span> <span className='' id='text'>Settings</span></Link>
            <Link to='/signout'><span id='icon'><i className='fas fa-sign-out '></i></span> <span className='' id='text'>Sign Out</span></Link>    
        </div>
    </>
  )
}

export default StudentSideNav