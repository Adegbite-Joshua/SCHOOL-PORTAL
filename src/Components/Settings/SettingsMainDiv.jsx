import React from 'react'
import AllSettingsDiv from './AllSettingsDiv'

const SettingsMainDiv = () => {
  return (
    <>
        <div className='SettingsMainDiv border border-2 topSpace'>
          <p className='text-end me-5'><span id='toggleIcon' className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></p>
          <AllSettingsDiv/>
        </div>
    </>
  )
}

export default SettingsMainDiv