import React from 'react'
import LandingNav from '../LandingPage/LandingNav'
import StudentSideNav from '../StudentNav/StudentSideNav'
import ErrorMainDiv from './ErrorMainDiv'


const ErrorPage = () => {
    document.querySelector("title").innerText = `404 - Error Page`
  return (
    <>
        <div>
          <LandingNav/>
          <ErrorMainDiv/>
        </div>
    </>
  )
}

export default ErrorPage