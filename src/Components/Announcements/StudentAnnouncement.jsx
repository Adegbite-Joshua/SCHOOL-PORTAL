import React, {useEffect, useRef} from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav';
import AnnouncementMainDiv from './AnnouncementMainDiv';
import {useSelector} from 'react-redux'
import socketClient from 'socket.io-client'
import axios from 'axios'

const StudentAnnouncement = () => {
    document.querySelector("title").innerText = `Announcement`
    let studentInfo = useSelector((state)=>state.studentInformation);
    let socket = useRef()
    socket.current = socketClient('http://localhost:7777/student')
    const validateToken =()=>{
      socket.current.emit('validate_token', 'hello')
    }
    const recieveSocket =()=>{
      console.log('recieving');
        socket.current.on('back', (message)=>{
          console.log(message);
        })
    }

    useEffect(()=>{
      socket.current.on('connect', ()=>{
        console.log('Student connected');
        validateToken()
      })
    }, [])

    useEffect(()=>{
      // if(socket.current){
        recieveSocket()
      // }
    }, [socket])
   
  return (
    <>
        <div className="d-flex">
            <StudentSideNav/>
            <AnnouncementMainDiv socket={socket.current}/>
        </div>
    </>
  )
}

export default StudentAnnouncement