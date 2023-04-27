import React from 'react'
import InboxMainDiv from './InboxMainDiv'
import OtherStudents from './OtherStudents'
import StudentSideNav from '../StudentNav/StudentSideNav'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.scss'


const StudentInbox = () => {
    document.querySelector("title").innerText = `Inbox`
  return (
    <>
        <div className='d-flex w-100 overflow-hidden'>
            <StudentSideNav/>
            <InboxMainDiv/>
            <OtherStudents/>
        </div>
    </>
  )
}

export default StudentInbox