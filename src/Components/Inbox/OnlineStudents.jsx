import React from 'react'

const OnlineStudents = ({name}) => {
  return (
    <>
        <div className='w-100 p-2 my-2'>
            <img src="/vite.svg" className='float-left' alt="" />
            <h5 className='d-inline'>{name} <i className='fab fa-creative-commons-by ms-3 text-success'></i></h5>
        </div>
    </>
  )
}

export default OnlineStudents