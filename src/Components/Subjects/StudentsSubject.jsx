import React, { useEffect } from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import SubjectMainDiv from './SubjectMainDiv'
import SubjectSideDiv from './SubjectSideDiv'


const StudentsSubject = () => {
    document.querySelector("title").innerText = `Subjects`
    const toggleSideNav =()=>{
        document.getElementById('SubjectSideDiv').classList.toggle('SubjectSideDiv')
    }
    const setVieingSubject =(subjectIndex)=>{
      console.log(subjectIndex)
  }
  return (
    <>
        <div className='d-flex w-100'>
            <StudentSideNav/>
            <SubjectMainDiv func={toggleSideNav}/>
            <SubjectSideDiv func={toggleSideNav} func2={setVieingSubject}/>
        </div>
    </>
  )
}

export default StudentsSubject