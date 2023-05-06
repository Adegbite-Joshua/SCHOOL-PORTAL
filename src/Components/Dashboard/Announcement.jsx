import React from 'react'

const Announcement = ({announce}) => {
  return (
    <>
        <div className='rounded-3 bg-light p-2 my-1'>
            <img src="/vite.svg" className='float-start' alt="" />
            <p>{announce}</p>
        </div>
    </>
  )
}

export default Announcement