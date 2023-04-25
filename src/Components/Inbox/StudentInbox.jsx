import React from 'react'
import InboxMainDiv from './InboxMainDiv'
import OtherStudents from './OtherStudents'
import StudentSideNav from '../StudentSideNav'

const StudentInbox = () => {
    document.querySelector("title").innerText = `Inbox`
  return (
    <>
        <div className='d-flex w-100'>
            <StudentSideNav/>
            <InboxMainDiv/>
            <OtherStudents/>
        </div>
    </>
  )
}

export default StudentInbox