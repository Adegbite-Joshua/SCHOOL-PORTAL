import React from 'react'
import StudentSocialMedia from './StudentSocialMedia'
import StudentSubject from './StudentSubject'
import StudentProfileUpdate from './StudentProfileUpdate'
import StudentCalendar from './StudentCalendar'

const AllSettingsDiv = () => {
  return (
    <>
        <div className='AllSettingsDiv'>
            <StudentSocialMedia/>
            <StudentSubject/>
            <StudentProfileUpdate/>
            <StudentCalendar/>
        </div>
    </>
  )
}

export default AllSettingsDiv