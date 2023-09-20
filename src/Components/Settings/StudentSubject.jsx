import React from 'react'
import { useSelector } from 'react-redux';
import subjects from '../../subjectArray';
import Subject from './Subject'


const StudentSubject = () => {
    // document.querySelector("title").innerText = `404 - Error Page`
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);  
  return (
    <>
        <div className='w-100 px-4'>
            <div>
                <h3>Subject You Are Offering</h3>
                <select disabled name='' id='' multiple className='form-control my-2'>
                    {studentInfo.subjects.map((subject, index)=>(
                        <Subject name={subjects[subject.subjectIndex]}/>
                    ))}
                </select>
                {/* <button className='btn blue500 my-2 w-100'>Add Subject(s)</button> */}
            </div>
            <div>
                <h3>Unoffered Subjetcs</h3>
                <select disabled name='' id='' multiple className='form-control my-2'>
                    {subjects.map((unaddedSubject)=>{
                        // const added studentInfo.subjects.find((subject)=>subject==unaddedSubject)
                        if(!studentInfo.subjects.includes(unaddedSubject)){
                            return (<Subject name={unaddedSubject}/>)
                        }
                    })}
                </select>
                {/* <button className='btn blue500 my-2 w-100'>Remove Subject(s)</button> */}
            </div>
        </div>
    </>
  )
}

export default StudentSubject