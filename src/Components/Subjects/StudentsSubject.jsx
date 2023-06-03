import React, { useEffect, useState } from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import SubjectMainDiv from './SubjectMainDiv'
import SubjectSideDiv from './SubjectSideDiv'


const StudentsSubject = () => {
    document.querySelector("title").innerText = `Subjects`
    const [viewingSubject,setviewingSubject ] = useState(null)
    const toggleSideNav =()=>{
        document.getElementById('SubjectSideDiv').classList.toggle('SubjectSideDiv')
    }

    const setVieingSubject =(subjectIndex)=>{
      // console.log(subjectIndex)
      setviewingSubject(subjectIndex)
    }
  return (
    <>
        <div className='d-flex w-100'>
            <StudentSideNav/>
            <SubjectMainDiv subjectIndex={viewingSubject} func={toggleSideNav}/>
            <SubjectSideDiv func={toggleSideNav} func2={setVieingSubject}/>
        </div>
    </>
  )
}

export default StudentsSubject