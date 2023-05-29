import React from 'react'

const Tasks = ({task, date, empty}) => {
  return (
    <>
        <div className=" w-100 bg-light rounded-5 px-2 py-2 my-1">
          <h5>Task: {task}{!empty?<><span className='ms-3'>Date: {date}</span><i className='fas fa-edit'></i><i className='fas fa-trash'></i></>:''}</h5>
        </div>
    </>
  )
}

export default Tasks