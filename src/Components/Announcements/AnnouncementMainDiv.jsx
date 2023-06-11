import React from 'react'
import Announcement from './Announcement'
import './style.scss'
import {useSelector} from 'react-redux'
import SnackBar from '../../SnackBar'


const AnnouncementMainDiv = () => {
  let studentInfo = useSelector((state)=>state.studentInformation);
  let filtered = [];
  const findAnnouncement=(search)=>{
    if (search.trim().length>0) {
      filtered = studentInfo.announcements.find((announcement, index)=>announcement.announcementMessage.includes())
    }
  }
  const showSnackBar = () => {
      // Get the snackbar DIV
      var x = document.getElementById("snackbarContainer");
      x.className = "show";
    
      setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
  }

  return (
    <>
        <div className="AnnouncementMain px-4 border border-2">
            <h3 className='text-center bg-light p-2 rounded-5 my-3'>Announcements</h3>
            <div className='input-group'>
              <input type='search' onKeyDown={(e)=>findAnnouncement(e.target.value)} className='form-control' placeholder='Type to search for any announcement'></input>
              <button className='btn btn-info' onClick={()=>showSnackBar()}>Search</button>
            </div>
            <div className='AnnouncementMainDiv' id='AnnouncementMainDiv' style={{height: '80%', overflowY: 'auto'}}>
                {filtered.length>0?filtered.map((announcement, index)=>(<>
                    <Announcement announcement='Lorem dolor sit amet consectetur adipisicing elit. Corporis cum, vel dignissimos illum temporibus nihil molestias.'/>
                </>)):studentInfo.announcements?studentInfo.announcements.map((announcement, index)=>(
                  <>
                    <Announcement announcement='Lorem dolor sit amet consectetur adipisicing elit. Corporis cum, vel dignissimos illum temporibus nihil molestias.'/>
                  </>
                )): <Announcement announcement='No Announcement Yet'/>}
                <div id='snackbarContainer'><SnackBar body='qwertyuiopdsasdf' type='info'/></div>
            </div>
        </div>
    </>
  )
}

export default AnnouncementMainDiv