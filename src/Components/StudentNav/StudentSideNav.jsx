import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const StudentSideNav = () => {
  const openNavPop =()=>{
      document.getElementById('mySidenav').classList.toggle('responsive')
  }
  return (
    <>
        <div id="mySidenav" className="sidenav blue600 text-center d-flex w-100 px-5">
            <img src="/vite.svg" style={{height: '60px', width: '60px'}} className='' alt="" />
            <h3 className='text-light'>PROADE SCHOOL</h3>
            <NavLink to='/dashboard'><span id='icon'><i className='d-none fas fa-home '></i><span>Home</span></span></NavLink>
            <NavLink to='/inbox'><span id='icon'><i className='d-none fas fa-inbox '></i><span>Inbox</span></span></NavLink>
            <NavLink to='/subjects'><span id='icon'><i className='d-none fas fa-book '></i><span>Subjects</span></span></NavLink>
            <NavLink to='/announcement'><span id='icon'><i className='d-none fas fa-bell '></i><span>Announcements</span></span></NavLink>
            <NavLink to='/activities'><span id='icon'><i className='d-none fas fa-calendar '></i><span>Activities</span></span></NavLink>
            <NavLink to='/activities'><span id='icon'><i className='d-none fas fa-calendar '></i><span>Payments</span></span></NavLink>
            <NavLink to='/settings'><span id='icon'><i className='d-none fas fa-gear '></i><span>Settings</span></span></NavLink>
            <NavLink to='/'><span id='icon'><i className='d-none fas fa-sign-out '></i><span>Sign Out</span></span></NavLink>    
            <span id='openPop' className='p-2 rounded-3 border border-2 border-light d-md-none' onClick={openNavPop}><i className='fas fa-bars text-light'></i></span>
        </div>
    </>
  )
}

export default StudentSideNav