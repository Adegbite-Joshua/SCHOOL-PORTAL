import React from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import SettingsMainDiv from './SettingsMainDiv'
import SettingsOtherDiv from './SettingsOtherDiv'
import './style.scss'


const StudentSettings = () => {
    document.querySelector("title").innerText = `Settings`
  return (
    <>
        <div className='d-flex'>
          <StudentSideNav/>
          <SettingsMainDiv/>
          <SettingsOtherDiv/>
        </div>
    </>
  )
}

export default StudentSettings