import React, { useState } from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import AllSettingsDiv from './AllSettingsDiv'
import StudentSocialMedia from './StudentSocialMedia'
import StudentSubject from './StudentSubject'
import StudentProfileUpdate from './StudentProfileUpdate'
import SettingsMainDiv from './SettingsMainDiv'
import SettingsOtherDiv from './SettingsOtherDiv'
import './style.scss'


const StudentSettings = () => {
    document.querySelector("title").innerText = `Settings`
    const toggleSideNav =()=>{
        document.getElementById('OtherStudents').classList.toggle('OtherStudents')
    }
    const [displaying, setdisplaying] = useState('AllSettingsDiv')
    const setSetting =(setting)=>{
      console.log(setting);
        setdisplaying(setting)
    }
  return (
    <>
        <div className='d-flex'>
          <StudentSideNav/>
          <SettingsMainDiv func={toggleSideNav} disp={displaying}/>
          <SettingsOtherDiv func={toggleSideNav} func2={setSetting}/>
        </div>
    </>
  )
}

export default StudentSettings