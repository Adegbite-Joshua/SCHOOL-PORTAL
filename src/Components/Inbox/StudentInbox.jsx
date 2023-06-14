import React, { useEffect, useState } from 'react'
import InboxMainDiv from './InboxMainDiv'
import OtherStudents from './OtherStudents'
import StudentSideNav from '../StudentNav/StudentSideNav'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.scss'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { fetchAllStaffs, fetchAllStudents, fetchStudent, setFetched } from '../../redux/studentInformation'
import Loader from '../../Loader'



const StudentInbox = () => {
    document.querySelector("title").innerText = `Inbox`
    const toggleSideNav =()=>{
        document.getElementById('OtherStudents').classList.toggle('OtherStudents')
    }
    const dispatch = useDispatch()
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    const fetchAll =()=>{
      let studentEndpoint = 'http://localhost:7777/student/allstudents'
      let staffEndPoint = 'http://localhost:7777/student/allstaffs'
        let endpoint = 'http://localhost:7777/student/dashboard'
        if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
          dispatch(setFetched(true))
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
        }

        if(allStaffs.length==0){
          dispatch(setFetched(true))
          axios.get(staffEndPoint)
          .then((res)=>{
            console.log(res);
            dispatch(fetchAllStaffs(res.data))
            dispatch(setFetched(false))
          })
          .catch((err)=>{
            console.log(err);
          })
        }
        if (allStudents.length==0) {
          dispatch(setFetched(true))
          axios.get(studentEndpoint)
          .then((res)=>{
            console.log(res);
            dispatch(fetchAllStudents(res.data))
            dispatch(setFetched(false))
          })
          .catch((err)=>{
            console.log(err);
          })
        }
    }
    const validateStudent =()=>{
      let token = localStorage.token
      let validateEndpoint = 'http://localhost:7777/student/validatedashboard'
      axios.get(validateEndpoint, {headers : {
        "Authorization": `Bearer ${token}`,
        "Content-Toe": "application/json",
        "Accept": "application/json"
      }})
      .then((res)=>{
        console.log(res);
        if (res.status != 200) {
          navigate('/signin')
        }
      })
      .catch((error)=>{
        navigate('/signin')
        console.log(error);
      })
    }
    useEffect(() => {
      validateStudent()
      fetchAll()
    }, [])
    const [category, setcategory] = useState('')
    const [mainindex, setmainindex] = useState('')
    const [individualEmail, setindividualEmail] = useState('')
    const [partnerName, setpartnerName] = useState('')


    const setAll =(cat, main, ind, partner)=>{
      console.log(cat, main, ind, partner);
      setcategory(cat)
      setmainindex(main)
      setindividualEmail(ind)
      setpartnerName(partner)
    }
  return (
    <>
        <div className='d-flex w-100 overflow-hidden'>
            <StudentSideNav/>
            {fetching==true && (<Loader/>)}
            {fetching==false && (<>
            <InboxMainDiv category={category} mainindex={mainindex} individualEmail={individualEmail} func={toggleSideNav} partner={partnerName}/>
            <OtherStudents  func={toggleSideNav} func2={setAll}/></>)}
        </div>
    </>
  )
}

export default StudentInbox