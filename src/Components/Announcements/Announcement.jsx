import React from 'react'

const Announcement = ({announcement}) => {
  return (
    <>
        <div className='w-100 bg-light d-block mx-auto my-2 rounded-4 p-3 mx-4'>
            <img src="vite.svg" className='float-start' alt="" />
            <h3 className="d-inline">{announcement}</h3>
        </div>
    </>
  )
}

export default Announcement