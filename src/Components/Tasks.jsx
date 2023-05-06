import React from 'react'

const Tasks = ({task, date}) => {
  return (
    <>
        <div className=" w-100 bg-light active rounded-5 px-2 py-2 my-1">
          <h5>Task: {task}<span>Date: {date}</span><i className='fas fa-edit'></i><i className='fas fa-trash'></i></h5>
        </div>
    </>
  )
}

export default Tasks