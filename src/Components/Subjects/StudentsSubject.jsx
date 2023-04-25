import React, { useEffect } from 'react'
import StudentSideNav from '../StudentSideNav'
import SubjectMainDiv from './SubjectMainDiv'
import SubjectSideDiv from './SubjectSideDiv'


const StudentsSubject = () => {
    document.querySelector("title").innerText = `Subjects`
  return (
    <>
        <div className='d-flex'>
            <StudentSideNav/>
            <SubjectMainDiv/>
            <SubjectSideDiv/>
        </div>
    </>
  )
}

export default StudentsSubject