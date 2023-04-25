import React from 'react'
import Announcement from './Announcement'

const AnnouncementMainDiv = () => {
  return (
    <>
        <div className="AnnouncementMain px-4 border border-2">
            <h3 className='text-center bg-light p-2 rounded-5 my-3'>Announcements</h3>
            <div className='input-group'>
              <input type='search' className='form-control' placeholder='Type to search for any announcement'></input>
              <button className='btn btn-info'>Search</button>
            </div>
            <div className='AnnouncementMainDiv' style={{height: '80%', overflowY: 'auto'}}>
                <Announcement/>
                <Announcement/>
                <Announcement/>
                <Announcement/>
                <Announcement/>
                <Announcement/>
            </div>
        </div>
    </>
  )
}

export default AnnouncementMainDiv