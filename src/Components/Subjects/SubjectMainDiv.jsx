import React, { useEffect } from 'react'
import ReceiverMessage from '../Inbox/ReceiverMessage'
import SenderMessage from '../Inbox/SenderMessage'
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'
import './style.scss'


const SubjectMainDiv = () => {
    useEffect(() => {
        console.log(document.getElementById("subjectContainer").scrollHeight)
        document.getElementById("subjectContainer").scrollTop = document.getElementById("subjectContainer").scrollHeight
    }, [])
    
    // const measure =()=>{
    //     // document.getElementById("subjectContainer").scrollTop = document.getElementById("subjectContainer").scrollHeight
    //     // console.log(document.getElementById("subjectContainer").scrollBottom)
    //     // console.log(document.getElementById("subjectContainer").scrollHeight)
    // }
    // subjectContainer.scrollTop = subjectContainer.scrollHeight;
  return (
    <>
        <div className='SubjectMainDiv p-5 topSpace'>
            <h3 className='top-0 text-center'>Mathematics <span id='toggleIcon' className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
            <div className='w-100 d-flex justify-content-between px-4 mt-3'>
                <a>C/A & Performance</a>
                <a>Resources</a>
                <a>Class</a>
            </div>
            <div id='subjectContainer' className='subjectContainer w-100 mt-3'>
                <div className="w-100 px-4 resultDiv">
                    <ResultsDisplay/>
                </div>
                <div className="d-flex gap-2 text-center mt-3 performanceDiv">
                    <SubjectPerformance/>
                    <SubjectPerformance/>
                    <SubjectPerformance/>
                </div>
            </div>
        {/* {document.getElementById("subjectContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default SubjectMainDiv