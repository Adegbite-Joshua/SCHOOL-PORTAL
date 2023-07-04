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
    const validateToken =()=>{
      socket.current.emit('student/validate_token', 'hello')
    }
    useEffect(()=>{
      socket.current = socketClient('http://localhost:7777/')
      validateToken()
    }, [])
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