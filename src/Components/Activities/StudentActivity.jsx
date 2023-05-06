import React from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import ActivityMainDiv from './ActivityMainDiv'
import ActivityOtherSide from './ActivityOtherSide'
import './style.css'
import './style.scss'

const StudentActivity = () => {
    let number = 999
    console.log(number.toLocaleString())
    // console.log(new Date(2023,3))
    const toggleSideNav =()=>{
      document.getElementById('ActivityOtherSide').classList.toggle('ActivityOtherSide')
  }
  return (
    <>
        <div className="d-flex">
            <StudentSideNav/>
            <ActivityMainDiv func={toggleSideNav}/>  
            <ActivityOtherSide func={toggleSideNav}/>
        </div>

    </>
  )
}

export default StudentActivity