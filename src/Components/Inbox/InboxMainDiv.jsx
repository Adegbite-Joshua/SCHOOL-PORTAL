import React, { useEffect } from 'react'
import ReceiverMessage from './ReceiverMessage'
import SenderMessage from './SenderMessage'
import {useSelector, useDispatch} from 'react-redux'



const InboxMainDiv = ({func, category, individualEmail, clas}) => {
    useEffect(() => {
        console.log(document.getElementById("messageContainer").scrollHeight)
        document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight
    }, [])
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);    
    let allStaffs = useSelector((state)=>state.studentInformation.allStaffs);    
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);    
    let fetching = useSelector((state)=>state.studentInformation.staffFetchingState);
  return (
    <>
        <div className='InboxMainDiv p-5 position-relative topSpace'>
            <h3 className='position-sticky top-0 text-center'>Adegbite Joshua <span id='toggleIcon' onClick={func} className='float-end border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
            <div id='messageContainer' className='messageContainer'>                
                {studentInfo.messages?studentInfo.messages.map(()=>(
                    <>
                        <SenderMessage message="Hey! I'm fine. Thanks for asking!" time='11:01PM'/>
                    </>
                )):<>
                    <div className='d-flex h-100 w-100 bg-light justify-content-center align-items-center'>
                        <p>Click on a name</p>
                    </div>
                </>}                    
            </div>
        {/* {document.getElementById("messageContainer").onscroll = measure} */}
        </div>
    </>
  )
}

export default InboxMainDiv