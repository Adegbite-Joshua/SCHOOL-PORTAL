import React, { useCallback, useEffect, useState } from 'react'
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
    let socket = useSelector((state)=>state.socketIO.socket);


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
    const [partnerId, setpartnerId] = useState('')
    const [partnerName, setpartnerName] = useState('')
    const [partnerCommonId, setpartnerCommonId] = useState('')
    const [messages, setmessages] = useState([]);
    const [allMessages, setallMessages] = useState({})

    let chatId = {};

    const setAll =(partnerName, partnerId)=>{
      setpartnerId(partnerId)
      setpartnerName(partnerName)
      chatId = {
        firstId: partnerId,
        secondId: studentInfo._id
      }
      if (!allMessages[partnerCommonId]) {
        axios.post('http://localhost:7777/student/createchat', chatId)
        .then((res)=>{
          console.log(res.data);
          setpartnerCommonId(res.data.created._id)
          setmessages(res.data.chats)
          let newAll = allMessages
          newAll[res.data.created._id] = res.data.chats
          setallMessages(newAll)
          // fetchChatId()
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    }

    const fetchChatId = useCallback(()=>{
      axios.post('http://localhost:7777/student/createchat', chatId)
      .then((res)=>{
        setpartnerCommonId(res.data._id);
        // fetchMessages();
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [partnerCommonId])

    const fetchMessages = () =>{
      axios.post('http://localhost:7777/student/getmessage', partnerCommonId)
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    const sendMessage =(message)=>{
      console.log(studentInfo);
      let messageDetails = {
          messageDate: new Date().toLocaleDateString(),
          messageTime: new Date().toLocaleTimeString(),
          message,
          // senderId: 'jkfjkjfdj',
          senderId: studentInfo._id,
          partnerCommonId: partnerCommonId 
      }
      let endpoint = 'http://localhost:7777/student/sendmessage'
      socket.emit('sendMessage', messageDetails)
      let newAll = allMessages
      newAll[partnerCommonId] = [...messages, messageDetails]
      setallMessages(newAll)
      console.log(messageDetails);
      console.log(allMessages);
      // axios.post(endpoint, messageDetails)
      // .then((res)=>{
      //     console.log(res);
      // })
      // .catch((error)=>{
      //     console.log(error);
      // })
    }
   
  return (
    <>
        <div className='d-flex w-100 overflow-hidden'>
            <StudentSideNav/>
            {/* {fetching==true && (<Loader/>)}
            {fetching==false && (<> */}
              <InboxMainDiv messages={messages} func={toggleSideNav} sendMessage={sendMessage} partnerName={partnerName} partnerCommonId={partnerCommonId} />
              <OtherStudents  func={toggleSideNav} func2={setAll}/>
            {/* </>)} */}
        </div>
    </>
  )
}

export default StudentInbox