import React, { useEffect, useState, useRef } from 'react'
import {useSelector} from 'react-redux'


const ResultsDisplay = ({subjectIndex}) => {
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    const [notFound, setnotFound] = useState(true)  
    let viewingSubject =  Object.keys(studentInfo).length>0?studentInfo.subjects[subjectIndex]:{}

  return (
    <>
        <table className='subjectTable'> {/* table table-bordered border-primary table-responsive*/}
            <thead>
                <tr>
                    <td>C/A</td>
                    <td>C/A</td>
                    <td>C/A</td>
                    <td>C/A</td>
                    <td>C/A</td>
                    <td>ASS</td>
                    <td>ASS</td>
                    <td>ASS</td>
                    <td>ASS</td>
                    <td>ASS</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>TEST</td>
                    <td>BONUS</td>
                    <td>BONUS</td>
                    <td>TOTAL</td>
                    <td>PERCENT</td>
                    <td>POSITION</td>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>{viewingSubject.ca1}</td>
                <td>{viewingSubject.ca2}</td>
                <td>{viewingSubject.ca3}</td>
                <td>{viewingSubject.ca4}</td>
                <td>{viewingSubject.ca5}</td>
                <td>{viewingSubject.ass1}</td>
                <td>{viewingSubject.ass2}</td>
                <td>{viewingSubject.ass3}</td>
                <td>{viewingSubject.ass4}</td>
                <td>{viewingSubject.ass5}</td>
                <td>{viewingSubject.test1}</td>
                <td>{viewingSubject.test2}</td>
                <td>{viewingSubject.test3}</td>
                <td>{viewingSubject.bonus1}</td>
                <td>{viewingSubject.bonus2}</td>
                <td>{viewingSubject.total}</td>
                <td>{viewingSubject.percent}</td>
                <td>{viewingSubject.position}</td>
              </tr>
            </tbody>
        </table>
    </>
  )
}

export default ResultsDisplay