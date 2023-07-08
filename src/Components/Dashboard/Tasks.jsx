import axios from 'axios'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchStudent, setFetched } from '../../redux/studentInformation'


const Tasks = ({task, date, empty, wholeTask, index}) => {
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  let dispatch = useDispatch();
  const deleteTask = ()=>{
    let endpoint = 'http://localhost:7777/student/deletetask'
    axios.post(endpoint, {token: localStorage.getItem('token'), wholeTask})
    .then((res)=>{
      console.log(res.data);
      dispatch(fetchStudent(res.data))
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const updateTask =()=>{
    let endpoint = 'http://localhost:7777/student/updatetask'
    let taskDetails = {
      taskDate: 'qwertyu',
      taskTime: 'qwertyu',
      taskBody: 'taskBody.value',
      class: Number(studentInfo.class),
      email: studentInfo.email,
      index: index
    }
    console.log(taskDetails)
    axios.post(endpoint, taskDetails)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
        <div className=" w-100 bg-light rounded-5 px-2 py-2 my-1">
          <p>Task: {task}{!empty?<><span className='ms-3'>Date: {date}</span><i onClick={updateTask} className='fas fa-edit'></i><i onClick={deleteTask} className='fas fa-trash'></i></>:''}</p>
        </div>
    </>
  )
}

export default Tasks