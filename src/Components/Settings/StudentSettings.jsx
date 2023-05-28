import React, { useState } from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav'
import SettingsMainDiv from './SettingsMainDiv'
import SettingsOtherDiv from './SettingsOtherDiv'
import './style.scss'


const StudentSettings = () => {
    document.querySelector("title").innerText = `Settings`
    const toggleSideNav =()=>{
        document.getElementById('SettingsOtherDiv').classList.toggle('SettingsOtherDiv2')
        console.log(document.getElementById('SettingsOtherDiv'));
    }
    const [displaying, setdisplaying] = useState('AllSettingsDiv')
    const setSetting =(setting)=>{
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