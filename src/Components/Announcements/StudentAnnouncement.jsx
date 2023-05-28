import React from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav';
import AnnouncementMainDiv from './AnnouncementMainDiv';
import {useSelector} from 'react-redux'



const StudentAnnouncement = () => {
    document.querySelector("title").innerText = `Announcement`
    let studentInfo = useSelector((state)=>state.studentInformation);

  return (
    <>
        <div className="d-flex">
            <StudentSideNav/>
            <AnnouncementMainDiv/>
        </div>
    </>
  )
}

export default StudentAnnouncement