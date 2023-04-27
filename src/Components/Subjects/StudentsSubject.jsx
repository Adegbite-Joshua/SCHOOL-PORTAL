import React, { useEffect } from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import SubjectMainDiv from './SubjectMainDiv'
import SubjectSideDiv from './SubjectSideDiv'


const StudentsSubject = () => {
    document.querySelector("title").innerText = `Subjects`
  return (
    <>
        <div className='d-flex w-100'>
            <StudentSideNav/>
            <SubjectMainDiv/>
            <SubjectSideDiv/>
        </div>
    </>
  )
}

export default StudentsSubject