import React, { useEffect, useState } from 'react'
import InboxMainDiv from './InboxMainDiv'
import OtherStudents from './OtherStudents'
import StudentSideNav from '../StudentNav/StudentSideNav'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.scss'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { fetchAllStaffs, fetchAllStudents, fetchStudent, setFetched } from '../../redux/studentInformation'




const StudentInbox = () => {
    document.querySelector("title").innerText = `Inbox`
    const toggleSideNav =()=>{
        document.getElementById('OtherStudents').classList.toggle('OtherStudents')
    }
    const dispatch = useDispatch()
    let studentInfo = useSelector((state)=>state.studentInformation);
    let allStaffs = useSelector((state)=>state.allStaffs);
    let allStudents = useSelector((state)=>state.allStudents);
    const fetchAll =()=>{
      let studentEndpoint = 'http://localhost:7777/student/allstudents'
      let staffEndPoint = 'http://localhost:7777/student/allstaffs'
      // if (allStaffs==[]) {
        let endpoint = 'http://localhost:7777/student/dashboard'
        let details = {
          class: Number(localStorage.getItem('studentclass')),
          password: localStorage.getItem('studentpassword'),
          matricNumber: localStorage.getItem('studentmatric')
        }
        axios.post(endpoint, details)
        .then((res)=>{
          if (res.status==200) {
            dispatch(fetchStudent(res.data))
            dispatch(setFetched(false))
          } else{
            console.log('error');
          }
        })

        axios.get(staffEndPoint)
        .then((res)=>{
          console.log(res);
          dispatch(fetchAllStaffs(res.data))
        })
        .catch((err)=>{
          console.log(err);
        })
      // }
      // if (allStudents==[]) {
        axios.get(studentEndpoint)
        .then((res)=>{
          console.log(res);
          dispatch(fetchAllStudents(res.data))
        })
        .catch((err)=>{
          console.log(err);
        })
      // }
    }

    useEffect(() => {
      fetchAll()
    }, [])
    const [category, setcategory] = useState('')
    const [mainindex, setmainindex] = useState('')
    const [individualEmail, setindividualEmail] = useState('')

    const setAll =(cat, main, ind)=>{
      console.log(cat, main, ind);
      setcategory(cat)
      setmainindex(main)
      setindividualEmail(ind)
    }
  return (
    <>
        <div className='d-flex w-100 overflow-hidden'>
            <StudentSideNav/>
            <InboxMainDiv category={category} mainindex={mainindex} individualEmail={individualEmail} func={toggleSideNav}/>
            <OtherStudents  func={toggleSideNav} func2={setAll}/>
        </div>
    </>
  )
}

export default StudentInbox