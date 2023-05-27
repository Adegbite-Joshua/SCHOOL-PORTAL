import React, { useState } from 'react'
import OnlineStudents from './OnlineStudents'
import {useSelector} from 'react-redux'


const Staffs = () => {
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);    
    const [viewing, setviewing] = useState(0)

  return (
    <>
        <select name="" id="selectClass" onChange={(e)=>setviewing(e.target.value)} className='form-control'>
            <option value="0">JSS 1 </option>
            <option value="1">JSS 2</option>
            <option value="2">JSS 3</option>
            <option value="3">SSS 1</option>
            <option value="4">SSS 2</option>
            <option value="5">SSS 3</option>
        </select>
        {allStaffs[viewing]?allStaffs[viewing].map((student)=>(
            <>
                <OnlineStudents name='Adegbite Joshua'/>
            </>
        )):''}
    </>
  )
}

export default Staffs