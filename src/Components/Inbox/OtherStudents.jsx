import React from 'react'
import OnlineStudents from './OnlineStudents'

const OtherStudents = ({func}) => {
  return (
    <>
        <div id='OtherStudents' className='showNone topSpace'>
            <label htmlFor="selectClass" className='text-center text-light fw-bold p-2'>Select a class to view students <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-close'></i></span></label>
            <select name="" id="selectClass" className='form-control'>
                <option value="">JSS 1 </option>
                <option value="">JSS 2</option>
                <option value="">JSS 3</option>
                <option value="">SSS 1</option>
                <option value="">SSS 2</option>
                <option value="">SSS 3</option>
            </select>
            <div className='w-100 OtherStudentsDiv py-3' style={{height: '80vh', overflowY: 'auto'}}>
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
            </div>
        </div>
    </>
  )
}

export default OtherStudents