import React, { useState } from 'react'
import OnlineStudents from './OnlineStudents'
import Staffs from './Staffs'
import Students from './Students'

const OtherStudents = ({func}) => {
  const [viewing, setviewing] = useState('students')
  return (
    <>
        <div id='OtherStudents' className='showNone topSpace'>
            <label htmlFor="selectClass" className='text-center text-light fw-bold p-2'>Select a class to view students <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-close'></i></span></label>
            <div>
                <button className='btn btn-info m-1' onClick={()=>setviewing('students')}>Students</button>
                <button className='btn btn-info m-1' onClick={()=>setviewing('staffs')}>Staffs</button>
                <button className='btn btn-info m-1'>Admin</button>
            </div>
            <div className='w-100 OtherStudentsDiv py-3' style={{height: '80vh', overflowY: 'auto'}}>
                {viewing=='students'?<Students/>:''}
                {viewing=='staffs'?<Staffs/>:''}
            </div>
        </div>
    </>
  )
}

export default OtherStudents