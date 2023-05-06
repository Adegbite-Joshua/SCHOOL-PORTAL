import React from 'react'

const Activity = ({name, assignee, date, duration, status}) => {
  return (
    <>
        <tr className=''>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1"> {name}</div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1 d-none d-sm-block"> {assignee}</div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1"> {duration} </div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1"> {date}</div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1"> <p className='text-success fw-bold'>{status}</p></div></td>
            {/* <td>School Excursion</td> */}
        </tr>
    </>
  )
}

export default Activity