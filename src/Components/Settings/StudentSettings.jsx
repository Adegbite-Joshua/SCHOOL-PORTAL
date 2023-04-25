import React from 'react'
import StudentSideNav from '../StudentSideNav'
import SettingsMainDiv from './SettingsMainDiv'
import SettingsOtherDiv from './SettingsOtherDiv'


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