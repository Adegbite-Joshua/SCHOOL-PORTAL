import React from 'react'
import Subject from './Subject'
import {useSelector} from 'react-redux'


const SubjectSideDiv = ({func, func2}) => {
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  let fetching = useSelector((state)=>state.studentInformation.staffFetchingState);
  let studentSubject = [];
  if (!fetching) {
    studentInfo?studentInfo.subjects.map((subject, index)=>{
        studentSubject.push({subject:Number(subject.subjectIndex), index:Number(index)})
    }):''
    console.log(studentSubject)
  }
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
  return (
    <>
        <div id='SubjectSideDiv' className='showNone topSpace'>
            <h3 className='text-center'>Subjects <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-close'></i></span></h3>
            <div className='w-100 SubjectSide' style={{height: '80vh', overflowY: 'auto'}}>
                {studentSubject.map((subject, index)=>(
                  <Subject func={func2} subjectIndex={subject.index} name={subjects[subject.subject]}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default SubjectSideDiv