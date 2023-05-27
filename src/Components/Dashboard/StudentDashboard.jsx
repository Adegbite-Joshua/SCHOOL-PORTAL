import React, { useEffect, useState } from 'react'
import StudentMainDiv from './StudentMainDiv'
import StudentSideNav from '../StudentNav/StudentSideNav'
import Tasks from './Tasks'
import './style.scss'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { fetchStudent } from '../../redux/studentInformation'


const StudentDashboard = () => {
  let dispatch = useDispatch();
  document.querySelector("title").innerText = `Dashboard`
    let values = useParams()
    console.log(values);
    let studentInfo = useSelector((state)=>state.studentInformation);
    const getInfo =()=>{
      let endpoint = 'http://localhost:7777/student/dashboard'
      let details = {
        class: Number(localStorage.getItem('studentclass')),
        password: localStorage.getItem('studentpassword'),
        matricNumber: localStorage.getItem('studentmatric')
      }
      console.log(details);
      axios.post(endpoint, details)
      .then((res)=>{
        if (res.status==200) {
          dispatch(fetchStudent(res.data))
        } else{
          console.log('error');
        }
      })
    }
    useEffect(() => {
      getInfo()
    }, [])
    
  return (
    <>
        <div className='d-flex allWrap'>
            <StudentSideNav/>
            <StudentMainDiv/>
            <div className='d-inline-block topSpace taskDiv position-relative'>
              <h2 className='text-center position-sticky top-0 blue500 p-2 rounded-2 mx-3'>Your Tasks:</h2>
              <Tasks date='07/02/2005' task=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sapiente.'/>
              <Tasks date='07/02/2005' task=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sapiente.'/>
              <Tasks date='07/02/2005' task=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sapiente.'/>
              <button className='btn btn-outline-info d-block mx-auto'><i className='fas fa-add'></i> Add New</button>
            </div>
            {/* <Tasks/> */}
        </div>
    </>
  )
}

export default StudentDashboard