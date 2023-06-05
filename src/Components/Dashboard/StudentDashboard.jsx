import React, { useEffect, useState } from 'react'
import StudentMainDiv from './StudentMainDiv'
import StudentSideNav from '../StudentNav/StudentSideNav'
import Tasks from './Tasks'
import './style.scss'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import { fetchStudent, setFetched } from '../../redux/studentInformation'
import Loader from '../../Loader'


const StudentDashboard = () => {
  let dispatch = useDispatch();
  const [addingTask, setaddingTask] = useState(false)
  document.querySelector("title").innerText = `Dashboard`
    let values = useParams()
    console.log(values);
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    const getInfo =()=>{
      fetchStudentInformation()
    }
    useEffect(() => {
      getInfo()
    }, [])

    const fetchStudentInformation =()=>{
      if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
        alert('okay')
        dispatch(setFetched(true))
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
            // fetching = false
          } else{
            console.log('error');
          }
        })
      }
    }

    const closeAddToTask = () => {
      document.getElementById('popup').classList.remove("open-popup")
    }
    const openAddToTask = () => {
      document.getElementById('popup').classList.add("open-popup")
    }
    const addToTasks =()=>{
      // console.log(studentInfo);
      setaddingTask(true)
      let taskDetails = {
        taskDate: taskTime.value.split('T')[0],
        taskTime: taskTime.value.split('T')[1],
        taskBody: taskBody.value,
        class: Number(studentInfo.class),
        email: studentInfo.email
      }
      console.log(taskDetails);
      let endpoint = 'http://localhost:7777/student/addtotask'
      axios.post(endpoint, taskDetails)
      .then((res)=>{
        setaddingTask(false)
        alert('task added')
        closeAddToTask()
        console.log(res.data);
      })
      .catch((error)=>{
        setaddingTask(false)
        alert('error in adding task')
        closeAddToTask()
        console.log(error);
      })
    }
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
                    <input type="datetime-local" name="" className='form-control' id="taskTime" />
                    <button type="button" disabled={addingTask?true:false} id="button1" onClick={addToTasks}>{addingTask?'Adding':'Add Task'}</button>
                </div>
              </div>
              </>)}
        </div>
     
    </>
  )
}

export default StudentDashboard