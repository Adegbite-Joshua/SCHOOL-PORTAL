import React from 'react'

const Activity = ({name, assignee, date, duration, status}) => {
  return (
    <>
        <tr className=''>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1 widthTd"> {name}</div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1 d-none d-sm-inline-block"> {assignee}</div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1 d-none d-sm-inline-block"> {duration} </div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1 d-none d-sm-inline-block"> {date}</div></td>
            <td className='p-2'><div className="bg-light rounded-3 shadow-lg p-1 d-none d-sm-inline-block"> <p className='text-success fw-bold'>{status}</p></div></td>
            {/* <td>School Excursion</td> */}
        </tr>
    </>
  )
}

export default Activity