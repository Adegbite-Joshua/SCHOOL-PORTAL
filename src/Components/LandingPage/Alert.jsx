import React from 'react'

const Alert = () => {
  return (
    <div className='w-75 h-75 blue500 d-flex mx-auto p-5 position-relative blue400 rounded-3' style={{zIndex: '1'}}>
        <i className='position-absolute top-5 start-5 fa fa-bell'></i> <i className='position-absolute top-5 end-0 me-5 fa fa-close float-end'></i>
        <h3 className='align-self-center'>PROADE SCHOOL is currently operating full-time, in-person learning.</h3>
    </div>
  )
}

export default Alert