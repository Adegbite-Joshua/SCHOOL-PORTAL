import React from 'react'
import StudentMainDiv from './StudentMainDiv'
import StudentSideNav from '../StudentNav/StudentSideNav'
import Tasks from '../Tasks'
import './style.scss'

const StudentDashboard = () => {
  document.querySelector("title").innerText = `Dashboard`
  return (
    <>
        <div className='d-flex allWrap'>
            <StudentSideNav/>
            <StudentMainDiv/>
            <div className='d-inline-block topSpace taskDiv position-relative'>
              <h2 className='text-center position-sticky top-0 bg-info mx-3'>Your Tasks:</h2>
              <Tasks/>
              <Tasks/>
              <Tasks/>
              <button className='btn btn-outline-info d-block mx-auto'><i className='fas fa-add'></i> Add New</button>
            </div>
            {/* <Tasks/> */}
        </div>
    </>
  )
}

export default StudentDashboard