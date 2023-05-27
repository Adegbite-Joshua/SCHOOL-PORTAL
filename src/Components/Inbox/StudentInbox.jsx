import React, { useEffect } from 'react'
import InboxMainDiv from './InboxMainDiv'
import OtherStudents from './OtherStudents'
import StudentSideNav from '../StudentNav/StudentSideNav'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.scss'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'


const StudentInbox = () => {
    document.querySelector("title").innerText = `Inbox`
    const toggleSideNav =()=>{
        document.getElementById('OtherStudents').classList.toggle('OtherStudents')
    }
    const dispatch = useDispatch()
    let studentInfo = useSelector((state)=>state.studentInformation);
    let allStaffs = useSelector((state)=>state.allStaffs);
    let allStudents = useSelector((state)=>state.allStudents);
    // const fetchAll =()=>{
    //   if (allStaffs==[]) {
    //     axios.get()
    //   }
    // }
    useEffect(() => {
      
    }, [])
    
  return (
    <>
        <div className='d-flex w-100 overflow-hidden'>
            <StudentSideNav/>
            <InboxMainDiv func={toggleSideNav}/>
            <OtherStudents func={toggleSideNav}/>
        </div>
    </>
  )
}

export default StudentInbox