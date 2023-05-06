import React from 'react'
import StudentCalendar from './StudentCalendar'

const ActivityOtherSide = ({func}) => {
  return (
    <>
        <div id='ActivityOtherSide' className='showNone border border-2 border-info topSpace'>
            <button onClick={func} className='position-absolute top-5 end-0 rounded-3 p-2'><i className='fas fa-bars'></i></button>
            <StudentCalendar/>
        </div>
    </>
  )
}

export default ActivityOtherSide