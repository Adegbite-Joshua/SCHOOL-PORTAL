import React from 'react'


const SettingsOtherDiv = () => {
  return (
    <>
        <div className='SettingsOtherDiv border border-2 border-info topSpace'>
        <p className='text-center'><span id='toggleIcon' className='float-end border border-2 p-2 rounded-3'><i className='fas fa-close'></i></span></p>
          <h5>General</h5>
          <h5>Edit Profile</h5>
          <h5>Subjects</h5>
          <h5>Calendar</h5>
          <h5>Social Media</h5>
          <h5>Sign Out</h5>
        </div>
    </>
  )
}

export default SettingsOtherDiv