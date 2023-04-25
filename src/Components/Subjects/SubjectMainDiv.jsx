import React, { useEffect } from 'react'
import ReceiverMessage from '../Inbox/ReceiverMessage'
import SenderMessage from '../Inbox/SenderMessage'
import SubjectPerformance from './SubjectPerformance'


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
        <div className='SubjectMainDiv p-5 position-relative'>
            <h3 className='position-sticky top-0 text-center'>Mathematics</h3>
            <div className='w-100 d-flex'>
                <a>C/A</a>
                <a>Performance</a>
                <a>Resources</a>
                <a>Class</a>
            </div>
            <div id='subjectContainer' className='subjectContainer w-100 overflow-auto'>
                <table className='w-100'>
                    {/* <thead className='w-100 border border-3 text-center'> */}
                        <tr className=''>
                            <td className='w-100'>Subjects</td>
                        </tr>
                    {/* </thead> */}
                    {/* <tbody className='w-100'> */}
                        <tr className='d-flex'>
                            <td width='70px' className="tdInput border border-2">jk</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            <td width='70px' className="tdInput border border-2">jkfn</td>
                            
                        </tr>
                        
                    {/* </tbody> */}
                </table>
                <div className="d-flex gap-2 text-center">
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