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
  return (
    <>
        <div className="d-flex">
            <StudentSideNav/>
            <ActivityMainDiv/>  
            <ActivityOtherSide/>
        </div>

    </>
  )
}

export default StudentActivity