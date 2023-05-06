import React, { Component } from 'react'
import AllSettingsDiv from './AllSettingsDiv'
import StudentProfileUpdate from './StudentProfileUpdate'


const SettingsOtherDiv = ({func, func2}) => {
  return (
    <>
        <div className='SettingsOtherDiv border border-2 border-info topSpace'>
          <p className='text-center'><span id='toggleIcon' className='float-end border border-2 p-2 rounded-3'><i className='fas fa-close'></i></span></p>
          <h5 onClick={()=>func2('AllSettingsDiv')}>General</h5>
          <h5 onClick={()=>func2('StudentProfileUpdate')}>Edit Profile</h5>
          <h5 onClick={()=>func2('StudentSubject')}>Subjects</h5>
          <h5 onClick={()=>func2('StudentCalendar')}>Calendar</h5>
          <h5 onClick={()=>func2('StudentSocialMedia')}>Social Media</h5>
          <h5 onClick={()=>func2()}>Sign Out</h5>
        </div>
    </>
  )
}

export default SettingsOtherDiv