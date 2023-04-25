import React from 'react'
import { Link } from 'react-router-dom'

const StudentSideNav = () => {
  return (
    <>
        <div id="mySidenav" className="sidenav text-center">
            <img src="/vite.svg" style={{height: '120px', width: '120px'}} className='mt-5 mb-3' alt="" />
            <h1 className='text-light'>PROADE SCHOOL</h1>
            <Link to='/dashboard' ><i className='fas fa-home'></i> <span className='d-none d-md-inline'>Home</span></Link>
            <Link to='/inbox' ><i className='fas fa-inbox'></i> <span className='d-none d-md-inline'>Inbox</span></Link>
            <Link to='/subjects' ><i className='fas fa-book'></i> <span className='d-none d-md-inline'>Subjects</span></Link>
            <Link to='/announcement' ><i className='fas fa-bell'></i> <span className='d-none d-md-inline'>Announcements</span></Link>
            <Link to='/activities' ><i className='fas fa-calendar'></i> <span className='d-none d-md-inline'>Activities</span></Link>
            <Link to='/settings' ><i className='fas fa-gear'></i> <span className='d-none d-md-inline'>Settings</span></Link>
            <Link to='/signout' ><i className='fas fa-sign-out'></i> <span className='d-none d-md-inline'>Sign Out</span></Link>
            
        </div>
    </>
  )
}

export default StudentSideNav