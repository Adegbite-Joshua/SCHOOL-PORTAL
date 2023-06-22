import React, {useEffect, useRef} from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav';
import AnnouncementMainDiv from './AnnouncementMainDiv';
import {useSelector} from 'react-redux'
import socketClient from 'socket.io-client'


const StudentAnnouncement = () => {
    document.querySelector("title").innerText = `Announcement`
    let studentInfo = useSelector((state)=>state.studentInformation);
    let socketRef = useRef()
    useEffect(()=>{
      socketRef.current = socketClient('http://localhost:7777/student/dashboard')
    }, [])
  return (
    <>
        <div className="d-flex">
            <StudentSideNav/>
            <AnnouncementMainDiv socket={socketRef.current}/>
        </div>
    </>
  )
}

export default StudentAnnouncement