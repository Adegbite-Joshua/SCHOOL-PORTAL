import React from 'react'
import AllSettingsDiv from './AllSettingsDiv'
import StudentSocialMedia from './StudentSocialMedia'
import StudentSubject from './StudentSubject'
import StudentProfileUpdate from './StudentProfileUpdate'
import StudentCalendar from '../Activities/StudentCalendar'

const SettingsMainDiv = ({disp}) => {
  return (
    <>
        <div className='SettingsMainDiv border border-2 topSpace'>
          <p className='text-end me-5'><span id='toggleIcon' className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></p>
          <div id='displ'>
            {disp==='StudentSocialMedia'?<StudentSocialMedia/>:''}
            {disp==='StudentSubject'?<StudentSubject/>:''}
            {disp==='StudentProfileUpdate'?<StudentProfileUpdate/>:''}
            {disp==='StudentCalendar'?<StudentCalendar/>:''}
            {disp==='AllSettingsDiv'?<AllSettingsDiv/>:''}
          </div>
          
          {/* <AllSettingsDiv/>
          <StudentSocialMedia/>
          <StudentSubject/>
          <StudentProfileUpdate/> */}
        </div>
    </>
  )
}

export default SettingsMainDiv