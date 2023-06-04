import React, { useEffect, useState } from 'react'
import './App.css'
import './style.scss'
import './../node_modules/font-awesome/css/font-awesome.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import LandingPage from './Components/LandingPage/LandingPage'
import SignUpPage from './Components/Login/SignUpPage'
import { Routes, Route, useParams } from "react-router-dom";
import SignInPage from './Components/Login/SignInPage'
import MessageSchool from './Components/MessageSchool'
import StudentDashboard from './Components/Dashboard/StudentDashboard'
import StudentInbox from './Components/Inbox/StudentInbox'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import StudentsSubject from './Components/Subjects/StudentsSubject'
import StudentAnnouncement from './Components/Announcements/StudentAnnouncement'
import StudentSettings from './Components/Settings/StudentSettings'
import StudentActivity from './Components/Activities/StudentActivity'
import ContactUsPage from './Components/ContactUs/ContactUsPage'
import AboutUsPage from './Components/AboutUs/AboutUsPage'


function App() {
  
  return (
    <>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/home" to="/"/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          {/* <Route path='/dashboard' element={<StudentDashboard/>}/> */}
          {/* <Route path='/dashboard/:name' element={<StudentDashboard/>}/> */}
          <Route path='/dashboard' element={<StudentDashboard/>}/>
          <Route path='/inbox' element={<StudentInbox/>}/>
          <Route path='/subjects' element={<StudentsSubject/>}/>
          <Route path='/announcement' element={<StudentAnnouncement/>}/>
          <Route path='/activities' element={<StudentActivity/>}/>
          <Route path='/settings' element={<StudentSettings/>} />
          <Route path='/contactus' element={<ContactUsPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <MessageSchool/>   
    </>
  )
}

export default App
