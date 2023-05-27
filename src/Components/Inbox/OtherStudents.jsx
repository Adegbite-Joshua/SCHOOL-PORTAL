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
            <select name="" id="selectClass" className='form-control'>
                <option value="">JSS 1 </option>
                <option value="">JSS 2</option>
                <option value="">JSS 3</option>
                <option value="">SSS 1</option>
                <option value="">SSS 2</option>
                <option value="">SSS 3</option>
            </select>
            <div className='w-100 OtherStudentsDiv py-3' style={{height: '80vh', overflowY: 'auto'}}>
                {viewing=='students'?<Students/>:''}
                {viewing=='staffs'?<Staffs/>:''}
            </div>
        </div>
    </>
  )
}

export default OtherStudents