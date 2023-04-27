import React from 'react'
import StudentSideNav from '../StudentNav/StudentSideNav';
import AnnouncementMainDiv from './AnnouncementMainDiv';

const StudentAnnouncement = () => {
    document.querySelector("title").innerText = `Announcement`
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