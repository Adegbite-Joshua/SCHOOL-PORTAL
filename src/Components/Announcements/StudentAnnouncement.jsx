import React, {useEffect, useRef} from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav';
import AnnouncementMainDiv from './AnnouncementMainDiv';
import {useSelector} from 'react-redux'
import socketClient from 'socket.io-client'
import axios from 'axios'

const StudentAnnouncement = () => {
    document.querySelector("title").innerText = `Announcement`
    let studentInfo = useSelector((state)=>state.studentInformation);
    let socketIO = useSelector((state)=>state.socketIO.socket);
    console.log(socketIO)

    // let socket = useRef()
    //socketClient('http://localhost:7777/student')
    const validateToken =()=>{
      socketIO.emit('validate_token', 'hello')
    }

    useEffect(()=>{
      validateToken()
    }, [])
    socketIO.on('back', (message)=>{
      console.log(message)
    })
  return (
    <>
        <div className="d-flex">
            <StudentSideNav/>
            <AnnouncementMainDiv socket={socketIO}/>
            <button onClick={validateToken}>va</button>
        </div>
    </>
  )
}

export default StudentAnnouncement