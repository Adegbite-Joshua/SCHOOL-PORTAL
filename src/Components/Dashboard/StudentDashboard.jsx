import React, { useEffect, useState } from 'react'
import StudentMainDiv from './StudentMainDiv'
import StudentSideNav from '../StudentNav/StudentSideNav'
import Tasks from '../Tasks'
import './style.scss'
import { useParams } from 'react-router-dom'
const StudentDashboard = () => {
  document.querySelector("title").innerText = `Dashboard`
    let values = useParams()
    console.log(values);
  return (
    <>
        <div className='d-flex allWrap'>
            <StudentSideNav/>
            <StudentMainDiv name={values.name} announcement='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, eveniet? Repellat odio velit harum laudantium!' subjects={['Maths','English']} welcomeNote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dicta.' />
            <div className='d-inline-block topSpace taskDiv position-relative'>
              <h2 className='text-center position-sticky top-0 bg-info mx-3'>Your Tasks:</h2>
              <Tasks/>
              <Tasks/>
              <Tasks/>
              <button className='btn btn-outline-info d-block mx-auto'><i className='fas fa-add'></i> Add New</button>
            </div>
            {/* <Tasks/> */}
        </div>
    </>
  )
}

export default StudentDashboard