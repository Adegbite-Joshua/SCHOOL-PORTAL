import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const StudentSideNav = () => {
  const openNavPop =()=>{
      document.getElementById('mySidenav').classList.toggle('responsive')
  }
  return (
    <>
        <div id="mySidenav" className="sidenav text-center d-flex w-100 px-5">
            <img src="/vite.svg" style={{height: '60px', width: '60px'}} className='' alt="" />
            <h3 className='text-light'>PROADE SCHOOL</h3>
            <Link to='/dashboard'><span id='icon'><i className='fas fa-home '></i>Home</span></Link>
            <Link to='/inbox'><span id='icon'><i className='fas fa-inbox '></i>Inbox</span></Link>
            <Link to='/subjects'><span id='icon'><i className='fas fa-book '></i>Subjects</span></Link>
            <Link to='/announcement'><span id='icon'><i className='fas fa-bell '></i>Announcements</span></Link>
            <Link to='/activities'><span id='icon'><i className='fas fa-calendar '></i>Activities</span></Link>
            <Link to='/settings'><span id='icon'><i className='fas fa-gear '></i>Settings</span></Link>
            <Link to='/signout'><span id='icon'><i className='fas fa-sign-out '></i>Sign Out</span></Link>    
            <span id='openPop' className='p-2 rounded-3 border border-2 border-light d-md-none' onClick={openNavPop}><i className='fas fa-bars text-light'></i></span>
        </div>
    </>
  )
}

export default StudentSideNav