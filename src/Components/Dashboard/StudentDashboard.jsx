import React, { useEffect, useState, useRef } from 'react'
import StudentMainDiv from './StudentMainDiv'
import StudentSideNav from '../StudentNav/StudentSideNav'
import Tasks from './Tasks'
import './style.scss'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { fetchStudent, setFetched } from '../../redux/studentInformation'
import Loader from '../../Loader'
import SnackBar from '../../SnackBar'
import socketConnect from '../../CustomHooks/socketConnect'
import io from 'socket.io-client';
import useSocketConnection from '../../CustomHooks/useSocketConnection'
import fetchStudentInfo from '../../CustomHooks/fetchStudentInfo'
import checkStudentFeeStatus from '../../CustomHooks/checkStudentFeeStatus'



const StudentDashboard = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [addingTask, setaddingTask] = useState(false);
    document.querySelector("title").innerText = `Dashboard`;
    let values = useParams()
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    let socket = useSelector((state)=>state.socketIO.socket);
    const [paymentDisplayOption] = checkStudentFeeStatus();
    paymentDisplayOption=='indebt'?navigate('/feepayment'):'';


    // const useSoc = useSocketConnection('http://localhost:7777')
    // const getInfo =()=>{
    //   fetchStudentInformation()
    // }
    useEffect(() => {
      // getInfo()
      validateStudent()
      socket.emit('connectSocketId', studentInfo._id)
    }, [])

    // const fetchStudentInformation =()=>{
    //   if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
    //     dispatch(setFetched(true))
    //     let endpoint = 'http://localhost:7777/student/dashboard'
    //     // let details = {
    //     //   class: Number(localStorage.getItem('studentclass')),
    //     //   password: localStorage.getItem('studentpassword'),
    //     //   matricNumber: localStorage.getItem('studentmatric')
    //     // }
    //     let token = localStorage.getItem('token')
    //     axios.get(endpoint, {headers : {
    //       "Authorization": `Bearer ${token}`,
    //       "Content-Toe": "application/json",
    //       "Accept": "application/json"
    //     }})  
    //     .then((res)=>{
    //       if (res.status==200) {
    //         dispatch(fetchStudent(res.data))
    //         dispatch(setFetched(false))
    //       } else{
    //         console.log('error');
    //       }
    //     })
    //   }
    // }

    let [name] = fetchStudentInfo();

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
          // const connect = socketConnect('http://localhost:7777/student');
        }

      })
      .catch((error)=>{
        navigate('/signin')
        console.log(error);
      })
    }

    const closeAddToTask = () => {
      document.getElementById('popup').classList.remove("open-popup")
    }
    const openAddToTask = () => {
      document.getElementById('popup').classList.add("open-popup")
    }

    const showLink =()=>{
      console.log(`${studentInfo.pictureUrl.split('upload/')[0]}upload/r_max,q_50/${studentInfo.pictureUrl.split('upload/')[1]}`)
    }
    window.showLink = showLink

    const showSnackBar = () => {
      var x = document.getElementById("snackbarContainer");
      x.className = "show";    
      setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
    }

    const addToTasks =()=>{
      setaddingTask(true)
      let taskDetails = {
        taskDate: taskTime.value.split('T')[0],
        taskTime: taskTime.value.split('T')[1],
        taskBody: taskBody.value,
        class: Number(studentInfo.class),
        email: studentInfo.email,
        token: localStorage.getItem('token')
      }
      console.log(taskDetails);
      let endpoint = 'http://localhost:7777/student/addtotask'
      axios.post(endpoint, taskDetails)
      .then((res)=>{
        setaddingTask(false)
        closeAddToTask()
        setsnacksBarBody('Task Added Successfully!')
        dispatch(fetchStudent(res.data))
        taskBody.value = ''
        taskTime.value = ''
        setsnacksBarType('info')
        showSnackBar()
      })
      .catch((error)=>{
        setaddingTask(false)
        alert('error in adding task')
        closeAddToTask()
        setsnacksBarBody('Error Saving Your Task')
        setsnacksBarType('error')
        showSnackBar()
        // console.log(error);
      })
    }

    const [snacksBarBody, setsnacksBarBody] = useState('')
    const [snacksBarType, setsnacksBarType] = useState('info')

  return (
    <>
      
      
        <div className='d-flex allWrap'>
            <StudentSideNav/>
            {fetching && (<Loader/> )}
            {fetching==false && (<>
              <StudentMainDiv/>
              <div className='d-inline-block topSpace taskDiv position-relative'>
                <h2 className='text-center position-sticky top-0 blue500 p-2 rounded-2 mx-3'>Your Tasks:</h2>
                {studentInfo.tasks?studentInfo.tasks.map((task, index)=>(
                <Tasks date={task.taskDate} index={index} task={task.taskBody} wholeTask={task}/>
                )): <Tasks date='07/02/2005' task='No Task Added Yet' empty={true}/>}
                <button className='btn btn-outline-info d-block mx-auto' onClick={openAddToTask}><i className='fas fa-add'></i> Add New</button>
              </div>
              {/* <Tasks/> */}
              <div class="containerp">
                <div class="popup p-4" id="popup">
                    <button type="button" class="btn-close ms-auto d-block my-2" onClick={closeAddToTask} aria-label="Close"></button>
                    <textarea name="taskBody" id="taskBody" className='w-100' rows="10" placeholder='Add Task ...'></textarea>
                    <input type="datetime-local" name="" className='form-control'  id="taskTime" />
                    <button type="button" disabled={addingTask?true:false} id="button1" onClick={addToTasks}>{addingTask?'Adding':'Add Task'}</button>
                </div>
              </div>
              </>)}
              <div id='snackbarContainer'><SnackBar body={snacksBarBody} type={snacksBarType}/></div>
        </div>
     
    </>
  )
}

export default StudentDashboard