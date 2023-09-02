import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchStudent, setFetched } from '../redux/studentInformation';
import axios from 'axios'





const fetchStudentInfo = () => {
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
    let socket = useSelector((state)=>state.socketIO.socket);
    let dispatch = useDispatch();

    if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
        dispatch(setFetched(true))
        let endpoint = 'http://localhost:7777/student/dashboard'
        // let details = {
        //   class: Number(localStorage.getItem('studentclass')),
        //   password: localStorage.getItem('studentpassword'),
        //   matricNumber: localStorage.getItem('studentmatric')
        // }
        let token = localStorage.getItem('token')
        axios.get(endpoint, {headers : {
          "Authorization": `Bearer ${token}`,
          "Content-Toe": "application/json",
          "Accept": "application/json"
        }})  
        .then((res)=>{
          if (res.status==200) {
            dispatch(fetchStudent(res.data))
            dispatch(setFetched(false))
          } else{
            console.log('error');
          }
        })
    }
  return ['ade'];
};

export default fetchStudentInfo;
