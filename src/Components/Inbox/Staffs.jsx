import React, { useState } from 'react'
import OnlineStudents from './OnlineStudents'
import {useSelector} from 'react-redux'


const Staffs = () => {
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);    
    const [viewing, setviewing] = useState(0)
  return (
    <>
        <select name="" id="selectClass" className='form-control'>
            <option value="">JSS 1 </option>
            <option value="">JSS 2</option>
            <option value="">JSS 3</option>
            <option value="">SSS 1</option>
            <option value="">SSS 2</option>
            <option value="">SSS 3</option>
        </select>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
        <OnlineStudents name='Adegbite Joshua'/>
    </>
  )
}

export default Staffs