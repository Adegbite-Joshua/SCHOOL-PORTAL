import React from 'react'
import { Link } from 'react-router-dom'
import Announcement from './Announcement'
import SubjectDiv from './SubjectDiv'
import {useSelector} from 'react-redux'


const StudentMainDiv = ({welcomeNote}) => {
  const subjects = [
    'MATHEMATICS',
    'ENGLISH LANGUAGE',
    'YORUBA',
    'CIVIC EDUCATION',
    'COMPUTER STUDIES',
    'GEOGRAPHY',
    'ECONOMICS',
    'PHYSICS',
    'CHEMISTRY',
    'BIOLOGY',
    'ANIMAL HUSBANDRY',
    'FURTHER MATHEMATICS',
    'TECHNICAL DRAWING'
  ]
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  let fetching = useSelector((state)=>state.staffFetchingState)
  let studentSubject = [];
  let announcement; 
  if (!fetching) {
    studentInfo?studentInfo.subjects.map((subject, index)=>{
      if(index<=2){
        studentSubject.push(subject.subjectIndex)
      } else{
        return
      }
    }):''
    // console.log(studentSubject)
    announcement = studentInfo?studentInfo.announcements.filter((annouce, index)=>index<=3):''
  }
 
  return (
    <>
        <div className="StudentMainDiv p-4">
          <div className='w-75 d-block mx-auto bg-light shadow-lg rounded-4 p-4'>
            <h3>Your Profile</h3>
            {/* <img src="/vite.svg"  alt="" /> */}
            <p><h4 className='d-inline'>Hi {studentInfo.firstName}</h4> {welcomeNote}</p>
            <img style={{height:"100px", width: '100px'}} src={`${studentInfo.pictureUrl.split('upload/')[0]}upload/r_max,q_50/${studentInfo.pictureUrl.split('upload/')[1]}`} alt="" />
            <button className='btn btn-warning'>Profile</button>
          </div>
          <div className="w-100 p-2">
            <h4 className='ms-4'>Your Subjects <Link className='float-end me-4' to='/subjects'>See All</Link></h4>
            <div className="subjectsDiv">
              {studentSubject?studentSubject.map((subject, index) => (
                <>
                  <SubjectDiv subject={subjects[subject]}/>
                </>
              )):''}
            </div>
          </div>
          <div className="announcementDiv">
            <h3>Announcements <Link className='float-end' to='/announcement'>See All</Link></h3>
            {fetching?announcement.length>0>0?announcement.map((annouce, index)=>(
              <>
                <Announcement announce={annouce.announcement}/>
              </>
            )): <Announcement announce='You have no announcement at the moment'/>:''}
            
          </div>
        </div>
    </>
  )
}

export default StudentMainDiv