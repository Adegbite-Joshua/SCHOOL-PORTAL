import React from 'react'
import StudentSideNav from './StudentSideNav'
import ErrorMainDiv from './ErrorMainDiv'


const ErrorPage = () => {
    document.querySelector("title").innerText = `404 - Error Page`
  return (
    <>
        <div className='d-flex'>
          <StudentSideNav/>
          <ErrorMainDiv/>
        </div>
    </>
  )
}

export default ErrorPage