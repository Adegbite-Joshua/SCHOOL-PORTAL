import React from 'react'
import { Link } from 'react-router-dom'
import Announcement from './Announcement'
import SubjectDiv from './SubjectDiv'
const StudentMainDiv = () => {
  return (
    <>
        <div className="StudentMainDiv p-4">
          <div className='w-75 d-block mx-auto bg-light shadow-lg rounded-4 p-4'>
            <h3>Your Profile</h3>
            {/* <img src="/vite.svg"  alt="" /> */}
            <p><h4 className='d-inline'>Hi Kola</h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus doloremque? At.</p>
            <button className='btn btn-warning'>Profile</button>
          </div>
          <div className="w-100 p-2">
            <h4 className='ms-4'>Your Subjects <Link className='float-end me-4' to='/subjects'>See All</Link></h4>
            <div className="subjectsDiv">
              <SubjectDiv/>
              <SubjectDiv/>
              <SubjectDiv/>
            </div>
          </div>
          <div className="announcementDiv">
            <h3>Announcements <Link className='float-end' to='/announcement'>See All</Link></h3>
            <Announcement/>
            <Announcement/>
          </div>
        </div>
    </>
  )
}

export default StudentMainDiv